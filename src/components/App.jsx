import React, { useEffect, useState, createRef } from 'react'
import { ethers } from 'ethers'
import abi from '../utils/WavePortal.json'
import Wave from './Wave'
import styled from 'styled-components'

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 64px;
`

const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 600px;
`

const Header = styled.header`
	color: #302eac;
	font-weight: 900;
	text-align: center;
	font-size: 32px;
	font-weight: 600;
	text-shadow: 1px 1px #9999aa;
`

const Bio = styled.div`
	text-align: center;
	color: gray;
	margin-top: 16px;
`

const WaveInput = styled.input`
	background-color: #0000ff33;
	cursor: pointer;
	display: block;
	margin: 16px auto;
	padding: 8px;
	border: 0;
	border-radius: 10px;
	width: 200px;
`

const WaveButton = styled.input`
	background-color: #0000ff33;
	cursor: pointer;
	display: block;
	margin: 16px auto;
	padding: 8px;
	border: 0;
	border-radius: 10px;
	width: 200px;
`

export default function App() {
	/*
	 * Apenas uma variável de estado que utilizamos para armazenar a carteira pública do usuário.
	 */
	const loadingText = 'Carregando...'
	const [currentAccount, setCurrentAccount] = useState('')
	const [loading, setLoading] = useState(loadingText)
	const [waves, setWaves] = useState([])
	const messageRef = createRef()

	const contractAddress = '0x06380A711Cc060581E8c78759e83e0f4ddd82B13'
	const contractABI = abi.abi

	let wavePortalContract = null

	const showLoading = (message) => {
		setLoading(`${loadingText}<br/>${message}`)
	}

	const hideLoading = () => setLoading(null)

	const getWavePortalContract = async () => {
		if (wavePortalContract) {
			return wavePortalContract
		}

		const { ethereum } = window

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

	const checkIfWalletIsConnected = async () => {
		try {
			/*
			 * Primeiro checamos se temos acesso ao objeto window.ethereum
			 */
			const { ethereum } = window

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

			const { ethereum } = window

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

			const waveTxn = await wavePortalContract.doWave(message)
			showLoading(`Minerando... ${waveTxn.hash}`)

			await waveTxn.wait()
			showLoading(`Minerando -- ${waveTxn.hash}`)
		} catch (error) {
			console.log(error)
		}

		hideLoading()
	}

	const doLike = async (user) => {
		setLoading(`${loadingText} Deixando Like 👍👍👍`)

		try {
			const wavePortalContract = await getWavePortalContract()

			const waveTxn = await wavePortalContract.doLike(user)
			setLoading(`${loadingText} Minerando... ${waveTxn.hash}`)

			await waveTxn.wait()
			setLoading(`${loadingText} Minerando -- ${waveTxn.hash}`)
		} catch (error) {
			console.log(error)
		}

		setLoading(null)
	}

	useEffect(async () => {
		await checkIfWalletIsConnected()
		setLoading(null)
	}, [])

	useEffect(async () => {
		const wavePortalContract = await getWavePortalContract()

		const onNewWave = (from, messages, likes, timestamp) => {
			console.log('NewWave', from, messages, likes, timestamp)
			const newState = []
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
			setWaves(newState)
		}

		wavePortalContract.on('NewWave', onNewWave)

		return () => {
			if (wavePortalContract) {
				wavePortalContract.off('NewWave', onNewWave)
			}
		}
	}, [])

	if (loading) {
		return <Header>{loading}</Header>
	}

	let connectButton = (
		<button className='waveButton' onClick={connectWallet}>
			Conectar carteira
		</button>
	)
	let waveInterface = <React.Fragment></React.Fragment>
	if (currentAccount) {
		connectButton = <React.Fragment></React.Fragment>
		waveInterface = (
			<form action='#' onSubmit={doWave}>
				<WaveInput
					type='text'
					id='message'
					name='message'
					required
					minLength='4'
					maxLength='50'
					size='15'
					placeholder='Digite a menssagem'
					ref={messageRef}
				/>
				<WaveButton type='button' value='Dar Tchauzinho' />
			</form>
		)
	}

	return (
		<MainContainer>
			<DataContainer>
				<Header>👋👋👋Olá Pessoal!👋👋👋</Header>

				<Bio>
					Que tal mandar um tchauzinho👋 pela blockchain???
					<br />
					Este é meu primeiro app usando blockchain🤓, então se
					puder🙏
					<br />
					Conecte sua carteira 💵<b>Ethereum</b> wallet💵
					<br />
					E me manda um tchauzinho! please🙏😁😁😁
					<br />
					Você pode dar like nos usuários que já deram tchauzinho👋
					também!!!
				</Bio>

				{waveInterface}

				{connectButton}

				<br />

				{waves.map((wave) => Wave(wave, doLike))}
			</DataContainer>
		</MainContainer>
	)
}
