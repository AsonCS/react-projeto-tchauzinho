import React, { useEffect, useState, createRef } from 'react'
import { ethers } from 'ethers'
import abi from './utils/WavePortal.json'
import './App.css'

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
			setLoading(`${loadingText} Conectando carteira`)
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
		}
	}

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

	const doWave = async () => {
		try {
			const message = messageRef.current.value
			setLoading(`${loadingText} Fazendo Wave`)
			const wavePortalContract = await getWavePortalContract()

			const waveTxn = await wavePortalContract.doWave(message)
			setLoading(`${loadingText} Minerando... ${waveTxn.hash}`)

			await waveTxn.wait()
			setLoading(`${loadingText} Minerando -- ${waveTxn.hash}`)

			setLoading(null)
		} catch (error) {
			console.log(error)
		}
	}

	const doLike = async (user) => {
		if (!confirm(`Quer curtir o usuário ${user}? 👍👍👍`)) {
			return
		}
		try {
			setLoading(`${loadingText} Deixando Like 👍👍👍`)
			const wavePortalContract = await getWavePortalContract()

			const waveTxn = await wavePortalContract.doLike(user)
			setLoading(`${loadingText} Minerando... ${waveTxn.hash}`)

			await waveTxn.wait()
			setLoading(`${loadingText} Minerando -- ${waveTxn.hash}`)

			setLoading(null)
		} catch (error) {
			console.log(error)
		}
	}

	const getWaves = async () => {
		setLoading(`${loadingText} Pegando Wave`)
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
		return <div className='header'>{loading}</div>
	}

	const allWaves = waves.map((wave, idx) => {
		const like = () => {
			doLike(wave.user)
		}
		return (
			<div key={idx}>
				<hr />
				<label onClick={like}>Usuário: {wave.user}</label>
				<br />
				<label onClick={like}>Começou em: {wave.subscribedAt}</label>
				<br />
				<label onClick={like}>
					Número de Likes 👍👍👍: {wave.likes}
				</label>
				<ol>
					{wave.messages.map((message, idx) => {
						return <li key={idx}>👋 {message} 👋</li>
					})}
				</ol>
				<hr />
			</div>
		)
	})
	console.log(allWaves)

	return (
		<div className='mainContainer'>
			<div className='dataContainer'>
				<div className='header'>👋👋👋 Olá Pessoal!</div>

				<div className='bio'>
					Conecte sua carteira <b>Ethereum</b> wallet e me manda um
					tchauzinho! :)
				</div>

				{currentAccount && (
					<>
						<input
							className='waveButton'
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
						<button className='waveButton' onClick={doWave}>
							Dar Tchauzinho
						</button>
					</>
				)}

				{/*
				 * Se não existir currentAccount, apresente este botão
				 */}
				{!currentAccount && (
					<button className='waveButton' onClick={connectWallet}>
						Conectar carteira
					</button>
				)}

				<br />
				{allWaves}
			</div>
		</div>
	)
}
