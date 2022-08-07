import React, { useState } from 'react'

import * as Styled from './Styled'

interface Props {
	isClaiming: boolean
	mintNft: () => void
}

// Esse é o caso em que temos o endereço do usuário
// o que significa que ele conectou sua carteira ao nosso site!
export default function LoggedNotMinted(props: Props) {
	return (
		<Styled.Div>
			<Styled.H1>
				👀
				<Styled.Label>Carteira conectada</Styled.Label>
			</Styled.H1>
			<Styled.H2>
				<Styled.Label>? e agora 🤔🤔🤔 ?</Styled.Label>
				Mint gratuitamente seu NFT de membro
				<Styled.Label>🐣🐥🐔🐓</Styled.Label>
			</Styled.H2>
			<Styled.Button disabled={props.isClaiming} onClick={props.mintNft}>
				{props.isClaiming ? 'Cunhando...' : 'Mint NFT (GRATIS)'}
			</Styled.Button>
		</Styled.Div>
	)
}
