import { useState, useEffect, useMemo } from 'react'
import { EditionDrop } from '@thirdweb-dev/sdk'
import {
	useAddress,
	useMetamask,
	useEditionDrop,
	useToken,
} from '@thirdweb-dev/react'

import * as Styled from './Styled'

interface Props {
	editionDrop: EditionDrop
}

// Se o usuário já reivindicou seu NFT nós queremos mostrar a página interna da DAO para ele
// Apenas membros da DAO vão ver isso. Renderize todos os membros + quantidade de tokens
export default function LoggedMinted(props: Props) {
	const token = useToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS)

	// Guarda a quantidade de tokens que cada membro tem nessa variável de estado.
	const [memberTokenAmounts, setMemberTokenAmounts] = useState([])
	// O array guardando todos os endereços dos nosso membros.
	const [memberAddresses, setMemberAddresses] = useState([])

	// Agora, nós combinamos os memberAddresses e os memberTokenAmounts em um único array
	const memberList = useMemo(() => {
		return memberAddresses.map((address) => {
			// Se o endereço não está no memberTokenAmounts, isso significa que eles não
			// detêm nada do nosso token.
			const member = memberTokenAmounts?.find(
				({ holder }) => holder === address
			)

			return {
				address,
				tokenAmount: member?.balance.displayValue || '0',
			}
		})
	}, [memberAddresses, memberTokenAmounts])

	// Esse useEffect pega todos os endereços dos nosso membros detendo nosso NFT.
	useEffect(() => {
		// Do mesmo jeito que fizemos no arquivo 7-airdrop-token.js! Pegue os usuários que tem nosso NFT
		// com o tokenId 0.
		const getAllAddresses = async () => {
			try {
				const memberAddresses =
					await props.editionDrop.history.getAllClaimerAddresses(0)
				setMemberAddresses(memberAddresses)
				console.log('🚀 Endereços de membros', memberAddresses)
			} catch (error) {
				console.error('falha ao pegar lista de membros', error)
			}
		}
		getAllAddresses()
	}, [props.editionDrop.history])

	// Esse useEffect pega o # de tokens que cada membro tem.
	useEffect(() => {
		// Pega todos os saldos.
		const getAllBalances = async () => {
			try {
				const amounts = await token?.history.getAllHolderBalances()
				setMemberTokenAmounts(amounts)
				console.log('👜 Quantidades', amounts)
			} catch (error) {
				console.error('falha ao buscar o saldo dos membros', error)
			}
		}
		getAllBalances()
	}, [token?.history])

	// Uma função para diminuir o endereço da carteira de alguém, não é necessário mostrar a coisa toda.
	const formatAddress = (str) => {
		return str.substring(0, 6) + '...' + str.substring(str.length - 4)
	}

	const formatTokenAmount = (value: any) => {
		return parseFloat(value).toFixed(2).padStart(10, '0')
	}

	return (
		<Styled.Div>
			<Styled.H1>
				🐣🐥🐔🐓
				<Styled.Label>Pág dos membros da DAO</Styled.Label>
				🐓🐔🐥🐣
			</Styled.H1>
			<Styled.H2>
				Parabéns por fazer parte desse fundo de investimentos...
			</Styled.H2>
			<Styled.Section>
				<p>Lista de Membros</p>
				<small>Endereço Wallet / Quantidade de $CLUCK</small>
				<ul>
					{memberList.map((member) => {
						return (
							<li key={member.address}>
								{formatAddress(member.address)}:{' '}
								{formatTokenAmount(member.tokenAmount)}
							</li>
						)
					})}
				</ul>
			</Styled.Section>
		</Styled.Div>
	)
}
