import React from 'react'

import * as Styled from './Styled'

interface Props {
	connectWithMetamask: () => void
}

// Esse é o caso em que o usuário ainda não conectou sua carteira
// ao nosso webapp. Deixe ele chamar connectWallet.
export default function NotLogged(props: Props) {
	return (
		<Styled.Div>
			<Styled.H1>
				You're welcome à<Styled.Label>🐓 Chicken DAO 🐓</Styled.Label>
			</Styled.H1>
			<Styled.H2>
				A DAO dos investidores de
				<Styled.Label>frangos 🐣🐥🐔🐓</Styled.Label>
			</Styled.H2>
			<Styled.Button onClick={props.connectWithMetamask}>
				Conecte sua Wallet
			</Styled.Button>
		</Styled.Div>
	)
}
