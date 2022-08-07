import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react'
import { useState, useEffect } from 'react'

import { DataContainer, MainContainerBlack } from '../../styled'
import LoggedNotMinted from './LoggedNotMinted'
import AppNavigation from '../navigation'
import LoggedMinted from './LoggedMinted'
import NotLogged from './NotLogged'

export default function Home() {
	const TOKEN_ID = 0
	const TOKEN_AMOUNT = 1

	// Use o hook connectWallet que o thirdweb nos dá.
	const address = useAddress()
	const connectWithMetamask = useMetamask()
	const editionDrop = useEditionDrop(
		process.env.NEXT_PUBLIC_EDITION_DROP_ADDRESS
	)
	// Variável de estado para sabermos se o usuário tem nosso NFT.
	const [hasClaimedNFT, setHasClaimedNFT] = useState(false)
	// isClaiming nos ajuda a saber se está no estado de carregando enquanto o NFT é cunhado.
	const [isClaiming, setIsClaiming] = useState(false)

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

	const mintNft = async () => {
		try {
			setIsClaiming(true)
			await editionDrop.claim(TOKEN_ID.toString(), TOKEN_AMOUNT)
			console.log(
				`🌊 Cunhado com sucesso! Olhe na OpenSea:
				https://testnets.opensea.io/assets/${editionDrop.getAddress()}/${TOKEN_ID}`
			)
			setHasClaimedNFT(true)
		} catch (error) {
			setHasClaimedNFT(false)
			console.error('Falha ao cunhar NFT', error)
		} finally {
			setIsClaiming(false)
		}
	}

	return (
		<MainContainerBlack>
			<AppNavigation />

			<DataContainer>
				{!address ? (
					<NotLogged connectWithMetamask={connectWithMetamask} />
				) : (
					<>
						{hasClaimedNFT ? (
							<LoggedMinted editionDrop={editionDrop} />
						) : (
							<LoggedNotMinted
								isClaiming={isClaiming}
								mintNft={mintNft}
							/>
						)}
					</>
				)}
			</DataContainer>
		</MainContainerBlack>
	)
}
