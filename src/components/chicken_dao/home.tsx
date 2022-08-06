import { useAddress, useMetamask } from '@thirdweb-dev/react'
import React from 'react'

import { DataContainer, MainContainerBlack } from '../../styled'
import AppNavigation from '../navigation'
import * as Styled from './Styled'

export default function Home() {
	// Use o hook connectWallet que o thirdweb nos dá.
	const address = useAddress()
	const connectWithMetamask = useMetamask()
	console.log('👋 Address:', address)

	// Esse é o caso em que o usuário ainda não conectou sua carteira
	// ao nosso webapp. Deixe ele chamar connectWallet.
	const notLogged = () => {
		if (!address) {
			return (
				<Styled.Div>
					<h1>You are welcome à Chicken DAO</h1>
					<h2>A DAO dos investidores de frangos</h2>
					<Styled.Button onClick={connectWithMetamask}>
						Conecte sua Wallet
					</Styled.Button>
				</Styled.Div>
			)
		} else {
			return <></>
		}
	}

	// Esse é o caso em que temos o endereço do usuário
	// o que significa que ele conectou sua carteira ao nosso site!
	const logged = () => {
		if (address) {
			return (
				<Styled.Div>
					<h1>👀</h1>
					<h2>Carteira conectada, e agora 🤔🤔🤔</h2>
				</Styled.Div>
			)
		} else {
			return <></>
		}
	}

	return (
		<MainContainerBlack>
			<AppNavigation />

			<DataContainer>
				{notLogged()}
				{logged()}
			</DataContainer>
		</MainContainerBlack>
	)
}
