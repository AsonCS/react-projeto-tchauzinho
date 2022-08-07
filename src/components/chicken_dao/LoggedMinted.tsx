import { EditionDrop, Proposal } from '@thirdweb-dev/sdk'
import { useToken, useVote } from '@thirdweb-dev/react'
import { useState, useEffect, useMemo } from 'react'

import Proposals from './Proposals'
import * as Styled from './Styled'
import Members from './Members'

interface Props {
	address: string
	editionDrop: EditionDrop
}

// Se o usuário já reivindicou seu NFT nós queremos mostrar a página interna da DAO para ele
// Apenas membros da DAO vão ver isso. Renderize todos os membros + quantidade de tokens
export default function LoggedMinted(props: Props) {
	const token = useToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS)
	const vote = useVote(process.env.NEXT_PUBLIC_VOTE_CONTRACT_ADDRESS)

	// Guarda a quantidade de tokens que cada membro tem nessa variável de estado.
	const [memberTokenAmounts, setMemberTokenAmounts] = useState([])
	// O array guardando todos os endereços dos nosso membros.
	const [memberAddresses, setMemberAddresses] = useState([])

	const [proposals, setProposals] = useState<Array<Proposal>>([])

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

	// Recupere todas as propostas existentes no contrato.
	useEffect(() => {
		if (!vote) {
			return
		}

		// Uma chamada simples para vote.getAll() para pegar as propostas.
		const getAllProposals = async () => {
			try {
				const proposals = await vote.getAll()
				setProposals(proposals)
				console.log('🌈 Propostas:', proposals)
			} catch (error) {
				console.log('falha ao buscar propostas', error)
			}
		}
		getAllProposals()
	}, [vote])

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
			<Members memberList={memberList} />
			<Proposals
				address={props.address}
				proposals={proposals}
				token={token}
				vote={vote}
			/>
		</Styled.Div>
	)
}
