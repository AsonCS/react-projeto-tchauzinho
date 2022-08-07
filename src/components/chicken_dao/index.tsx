import {
	useAddress,
	useEditionDrop,
	useNetwork,
	useMetamask,
	ChainId,
} from '@thirdweb-dev/react'
import { useState, useEffect } from 'react'

import { DataContainer, MainContainerBlack } from '../../styled'
import LoggedNotMinted from './LoggedNotMinted'
import AppNavigation from '../navigation'
import LoggedMinted from './LoggedMinted'
import NotLogged from './NotLogged'

export default function ChickenDAOApp() {
	// This is the chainId your dApp will work on.
	const ACTIVE_CHAIN_ID = ChainId.Rinkeby
	const TOKEN_ID = 0

	// Use o hook connectWallet que o thirdweb nos dá.
	const address = useAddress()
	const connectWithMetamask = useMetamask()
	const editionDrop = useEditionDrop(
		process.env.NEXT_PUBLIC_EDITION_DROP_ADDRESS
	)
	const network = useNetwork()
	// Variável de estado para sabermos se o usuário tem nosso NFT.
	const [hasClaimedNFT, setHasClaimedNFT] = useState(false)
	// isClaiming nos ajuda a saber se está no estado de carregando enquanto o NFT é cunhado.
	const [isClaiming, setIsClaiming] = useState(false)

	const [hasShowedMessage, setHasShowedMessage] = useState(false)

	useEffect(() => {
		// Se ele não tiver uma carteira conectada, saia!
		if (!address) {
			return
		}
		console.log('👋 Address:', address)

		const checkBalance = async () => {
			try {
				const balance = await editionDrop.balanceOf(address, TOKEN_ID)
				// Se o saldo for maior do que 0, ele tem nosso NFT!
				if (balance.gt(0)) {
					setHasClaimedNFT(true)
					console.log('🌟 Esse usuário tem o NFT de membro!')
				} else {
					setHasClaimedNFT(false)
					console.log('😭 Esse usuário NÃO tem o NFT de membro.')
				}
			} catch (error) {
				setHasClaimedNFT(false)
				console.error('Falha ao ler saldo', error)
			}
		}
		checkBalance()
	}, [address, editionDrop])

	useEffect(() => {
		if (hasShowedMessage || !address || !network) {
			return
		}
		const id = network[0]?.data?.chain?.id
		if (id && network[0]?.data?.chain?.id !== ACTIVE_CHAIN_ID) {
			alert(
				'Por favor, conecte-se à rede Rinkeby' +
					'\n\n\t\t' +
					'Essa dapp só funciona com a rede Rinkeby, por favor troque de rede na sua carteira.'
			)
			setHasShowedMessage(true)
		}
	}, [address, network])

	return (
		<MainContainerBlack>
			<AppNavigation />

			<DataContainer>
				{!address ? (
					<NotLogged connectWithMetamask={connectWithMetamask} />
				) : (
					<>
						{hasClaimedNFT ? (
							<LoggedMinted
								address={address}
								editionDrop={editionDrop}
							/>
						) : (
							<LoggedNotMinted
								editionDrop={editionDrop}
								isClaiming={isClaiming}
								setIsClaiming={setIsClaiming}
								setHasClaimedNFT={setHasClaimedNFT}
								tokenId={TOKEN_ID.toString()}
							/>
						)}
					</>
				)}
			</DataContainer>
		</MainContainerBlack>
	)
}
