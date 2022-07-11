import React, { useEffect, useState, createRef } from 'react'
import abi from '../../utils/WavePortal.json'
import { ethers } from 'ethers'
import {
	MainContainerBlack,
	NftConnectButton,
	NftTwitterLogo,
	DataContainer,
	NftHeader,
	NftFooter,
	NftBio,
} from '../../styled'
import AppNavigation from '../navigation'

// Constants
const TWITTER_HANDLE = 'web3dev_'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`
const OPENSEA_LINK = ''
const TOTAL_MINT_COUNT = 50

export default function BlockchainApp() {
	/*
	 * Apenas uma variável de estado que utilizamos para armazenar a carteira pública do usuário.
	 */
	const loadingText = 'Carregando...'
	const [currentAccount, setCurrentAccount] = useState('')
	const [loading, setLoading] = useState(
		<React.Fragment>{loadingText}</React.Fragment>
	)
	const [waves, setWaves] = useState([])
	const messageRef = createRef<HTMLInputElement>()

	const contractAddress = '0x06380A711Cc060581E8c78759e83e0f4ddd82B13'
	const contractABI = abi.abi

	let wavePortalContract = null

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

	const getWavePortalContract = async () => {
		if (wavePortalContract) {
			return wavePortalContract
		}

		const ethereum = getEthereum()

		if (!ethereum) {
			alert('MetaMask não encontrada!')
			return null
		}

		const provider = new ethers.providers.Web3Provider(ethereum)
		const singer = provider.getSigner()
		wavePortalContract = new ethers.Contract(
			contractAddress,
			contractABI,
			singer
		)

		return wavePortalContract
	}

	const getWaves = async () => {
		const wavePortalContract = await getWavePortalContract()

		const allWaves = await wavePortalContract.getAllWaves()
		// console.log(allWaves[0].user)
		setWaves(
			allWaves.map((wave) => {
				return {
					user: wave.user,
					subscribedAt: new Date(
						wave.timestamp * 1000
					).toDateString(),
					likes: wave.likes.toNumber(),
					messages: wave.messages,
				}
			})
		)

		hideLoading()
	}

	const onNewWave = (from, messages, likes, timestamp) => {
		console.log('NewWave', from, messages, likes, timestamp)
		setWaves((waves) => {
			const newState = []
			console.log('waves', waves)
			waves.forEach((wave) => {
				if (wave.user !== from) {
					newState.push(wave)
				} else {
					newState.push({
						user: from,
						subscribedAt: new Date(timestamp * 1000).toDateString(),
						likes: likes.toNumber(),
						messages: messages,
					})
				}
			})
			console.log('newState', newState)
			return newState
		})

		hideLoading()
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
				await getWaves()
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
			getWaves()
		} catch (error) {
			console.log(error)
			hideLoading()
		}
	}

	const doWave = async (event) => {
		event.preventDefault()

		showLoading('Fazendo Wave')

		try {
			const message = messageRef.current.value
			const wavePortalContract = await getWavePortalContract()

			const waveTxn = await wavePortalContract.doWave(message, {
				gasLimit: 300000,
			})
			showLoading(`Minerando... ${waveTxn.hash}`)

			await waveTxn.wait()
		} catch (error) {
			console.log(error)
		}

		hideLoading()
	}

	const doLike = async (user) => {
		showLoading('Deixando Like 👍👍👍')

		try {
			const wavePortalContract = await getWavePortalContract()

			const waveTxn = await wavePortalContract.doLike(user)
			showLoading(`Minerando... ${waveTxn.hash}`)

			await waveTxn.wait()
		} catch (error) {
			console.log(error)
		}

		hideLoading()
	}

	useEffect(() => {
		async function init() {
			await checkIfWalletIsConnected()
			hideLoading()
			const wavePortalContract = await getWavePortalContract()

			if (!wavePortalContract) {
				return
			}

			wavePortalContract.on('NewWave', onNewWave)
		}
		init()

		return () => {
			if (wavePortalContract) {
				wavePortalContract.off('NewWave', onNewWave)
			}
		}
	}, [])

	if (loading) {
		return <NftHeader>{loading}</NftHeader>
	}

	// Render Methods
	const renderNotConnectedContainer = () => (
		<NftConnectButton>Conectar Carteira</NftConnectButton>
	)

	return (
		<MainContainerBlack>
			<DataContainer>
				<AppNavigation />

				<NftHeader>Minha Coleção de NFT</NftHeader>

				<NftBio>
					Exclusivos! Maravilhosos! Únicos! Descubra seu NFT hoje.
				</NftBio>

				{renderNotConnectedContainer()}

				<NftFooter>
					<NftTwitterLogo
						alt='Twitter Logo'
						src='/twitter-logo.svg'
					/>
					<a
						className='footer-text'
						href={TWITTER_LINK}
						target='_blank'
						rel='noreferrer'
					>{`feito com ❤️ pela @${TWITTER_HANDLE}`}</a>
				</NftFooter>
			</DataContainer>
		</MainContainerBlack>
	)
}
