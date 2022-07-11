import React, { useEffect, useState, createRef } from 'react'
import abi from '../../utils/MyEpicNFT.json'
import { BigNumber, ethers } from 'ethers'
import {
	MainContainerBlack,
	NftTwitterLogo,
	DataContainer,
	NftHeader,
	NftFooter,
	NftButton,
	ShotForm,
	NftInput,
	NftBio,
	Bio,
} from '../../styled'
import AppNavigation from '../navigation'

// Constants
const TWITTER_HANDLE = 'Andersongsa'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`
const OPENSEA_LINK = ''
const TOTAL_MINT_COUNT = 50

export default function NftApp() {
	/*
	 * Apenas uma variável de estado que utilizamos para armazenar a carteira pública do usuário.
	 */
	const loadingText = 'Carregando...'
	const [currentAccount, setCurrentAccount] = useState('')
	const [mintedByUser, setMintedByUser] = useState(0)
	const [loading, setLoading] = useState(
		<React.Fragment>{loadingText}</React.Fragment>
	)
	const [mintedMessage, setMintedMessage] = useState('')
	const [links, setLinks] = useState<Array<JSX.Element>>([])
	const messageRef = createRef<HTMLInputElement>()

	const contractAddress = '0x7c61f083d7C7CdC5D45CcC36be637b064A991E53'
	const contractABI = abi.abi

	let myEpicNFTContract = null

	const getEthereum = (): any => {
		/*
		 * Primeiro checamos se temos acesso ao objeto window.ethereum
		 */
		return (window as any).ethereum
	}

	const showLoading = (message) => {
		setLoading(
			<React.Fragment>
				{loadingText}
				<br />
				{message}
			</React.Fragment>
		)
	}

	const hideLoading = () => setLoading(null)

	const getMyEpicNFTContract = async (): Promise<any> => {
		if (myEpicNFTContract) {
			return myEpicNFTContract
		}

		const ethereum = getEthereum()

		if (!ethereum) {
			alert('MetaMask não encontrada!')
			return null
		}

		const provider = new ethers.providers.Web3Provider(ethereum)
		const singer = provider.getSigner()
		myEpicNFTContract = new ethers.Contract(
			contractAddress,
			contractABI,
			singer
		)

		return myEpicNFTContract
	}

	const checkIfWalletIsConnected = async () => {
		try {
			const ethereum = getEthereum()

			if (!ethereum) {
				console.log('Garanta que possua a Metamask instalada!')
				return
			} else {
				console.log('Temos o objeto ethereum', ethereum)
			}

			/*
			 * Confirma se estamos autorizados a acessar a carteira do cliente
			 */
			const accounts = await ethereum.request({ method: 'eth_accounts' })

			if (accounts.length !== 0) {
				const account = accounts[0]
				console.log('Encontrada a conta autorizada:', account)
				setCurrentAccount(account)
			} else {
				console.log('Nenhuma conta autorizada foi encontrada')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const connectWallet = async () => {
		try {
			showLoading('Conectando carteira')

			const ethereum = getEthereum()

			if (!ethereum) {
				alert('MetaMask não encontrada!')
				return
			}

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			})

			console.log('Conectado', accounts[0])
			setCurrentAccount(accounts[0])
			hideLoading()
		} catch (error) {
			console.log(error)
			hideLoading()
		}
	}

	const doMintNft = async (event) => {
		event.preventDefault()

		showLoading('Criando NFT')

		try {
			const message = messageRef.current.value
			const myEpicNFTContract = await getMyEpicNFTContract()

			const nftTxn = await myEpicNFTContract.makeAnEpicNFT(message, {
				gasLimit: 6000000,
			})
			showLoading(`Minerando... ${nftTxn.hash}`)

			await nftTxn.wait()

			const link = `https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
			setLinks((old) => {
				old.push(
					<a key={nftTxn.hash} href={link} target='_blank'>
						Cunhado, veja a transação:{' '}
						{nftTxn.hash.substring(0, 20)}...
					</a>
				)
				return old
			})
			setMintedByUser((old) => old + 1)
		} catch (error) {
			console.log(error)
		}

		hideLoading()
	}

	const getMintedByUser = async () => {
		showLoading(`Verificando quantos NFTs vc tem...`)

		try {
			const myEpicNFTContract = await getMyEpicNFTContract()

			if (!myEpicNFTContract) return

			const mintedByUser = await myEpicNFTContract.getMintedByUser()

			setMintedByUser(parseInt(mintedByUser))
		} catch (error) {
			console.log(error)
		}

		hideLoading()
	}

	const onNewEpicNFTMinted = (from: string, tokenId: BigNumber) => {
		setMintedMessage(
			`Olá ${from}! Já cunhamos seu NFT.\n
			Pode ser que esteja branco agora.\n
			Demora no máximo 10 minutos para aparecer no OpenSea.\n
			Aqui está o link: <https://testnets.opensea.io/assets/${contractAddress}/${tokenId.toNumber()}>`
		)
	}

	useEffect(() => {
		async function init() {
			await getMyEpicNFTContract()
			await checkIfWalletIsConnected()
			await getMintedByUser()

			if (!myEpicNFTContract) return

			myEpicNFTContract.on('NewEpicNFTMinted', onNewEpicNFTMinted)

			hideLoading()
		}
		init()

		return () => {
			if (myEpicNFTContract) {
				myEpicNFTContract.off('NewEpicNFTMinted', onNewEpicNFTMinted)
			}
		}
	}, [])

	if (loading) {
		return <NftHeader>{loading}</NftHeader>
	}

	// Render Methods
	const renderDataByCurrentAccount = () => {
		if (currentAccount)
			return (
				<React.Fragment>
					<ShotForm action='#' onSubmit={doMintNft}>
						<NftInput
							type='text'
							id='message'
							name='message'
							required
							minLength={4}
							maxLength={50}
							size={15}
							placeholder='Digite a menssagem'
							ref={messageRef}
						/>
						<NftButton>Mintar NFT</NftButton>
					</ShotForm>
				</React.Fragment>
			)
		else
			return (
				<React.Fragment>
					<NftButton onClick={connectWallet}>
						Conectar Carteira
					</NftButton>
				</React.Fragment>
			)
	}

	return (
		<MainContainerBlack>
			<AppNavigation />

			<DataContainer>
				<NftHeader>Minha Coleção de NFT</NftHeader>

				<NftBio>
					Exclusivos! Maravilhosos! Únicos! Descubra seu NFT hoje.
					<span>Vc tem {mintedByUser}/20 NFTs mintados...</span>
					<a
						href='https://testnets.opensea.io/collection/svgcollored'
						target='_blank'
					>
						Veja a coleção completa aqui!!!
					</a>
				</NftBio>

				{renderDataByCurrentAccount()}

				<Bio>
					<p>{mintedMessage}</p>
					<p>{links}</p>
				</Bio>
			</DataContainer>

			<NftFooter>
				<NftTwitterLogo alt='Twitter Logo' src='/twitter-logo.svg' />
				<a
					href={TWITTER_LINK}
					target='_blank'
					rel='noreferrer'
				>{`feito com ❤️ pela @${TWITTER_HANDLE}`}</a>
			</NftFooter>
		</MainContainerBlack>
	)
}
