import { EditionDrop } from '@thirdweb-dev/sdk'
import React, { useState } from 'react'

import * as Styled from './Styled'

interface Props {
	editionDrop: EditionDrop
	isClaiming: boolean
	setIsClaiming: (status: boolean) => void
	setHasClaimedNFT: (status: boolean) => void
	tokenId: string
}

// Esse é o caso em que temos o endereço do usuário
// o que significa que ele conectou sua carteira ao nosso site!
export default function LoggedNotMinted(props: Props) {
	const TOKEN_AMOUNT = 1

	const mintNft = async () => {
		try {
			props.setIsClaiming(true)
			await props.editionDrop.claim(props.tokenId, TOKEN_AMOUNT)
			console.log(
				`🌊 Cunhado com sucesso! Olhe na OpenSea:
				https://testnets.opensea.io/assets/${props.editionDrop.getAddress()}/${
					props.tokenId
				}`
			)
			props.setHasClaimedNFT(true)
		} catch (error) {
			props.setHasClaimedNFT(false)
			console.error('Falha ao cunhar NFT', error)
		} finally {
			props.setIsClaiming(false)
		}
	}

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
			<Styled.Button disabled={props.isClaiming} onClick={mintNft}>
				{props.isClaiming ? 'Cunhando...' : 'Mint NFT (GRATIS)'}
			</Styled.Button>
		</Styled.Div>
	)
}
