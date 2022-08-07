import { Proposal, Token, Vote } from '@thirdweb-dev/sdk'
import { AddressZero } from '@ethersproject/constants'
import React, { useEffect, useState } from 'react'

import * as Styled from './Styled'

interface Props {
	address: string
	proposals: Array<Proposal>
	token: Token
	vote: Vote
}

export default function Proposals(props: Props) {
	const AGAINST = 0
	const FOR = 1
	const ABSTAIN = 2

	const [visibility, setVisibility] = useState(false)
	const [isVoting, setIsVoting] = useState(false)
	const [hasVoted, setHasVoted] = useState(false)

	let proposalKeys: Array<string> = []

	// Uma função para diminuir o endereço da carteira de alguém, não é necessário mostrar a coisa toda.
	const formatAddress = (str) => {
		return str.substring(0, 8) + '...' + str.substring(str.length - 6)
	}

	const onSubmit = async (form) => {
		setIsVoting(true)

		const votes: Array<{
			proposalId: string
			vote: number
		}> = []
		props.proposals.forEach((proposal, idx) => {
			const vote = (form[proposalKeys[idx]] as HTMLInputElement).value
			if (vote) {
				votes.push({
					proposalId: proposal.proposalId.toHexString(),
					//abstenção é a escolha padrão
					vote: parseInt(vote || ABSTAIN.toString()),
				})
			}
		})

		if (votes.length === 0) {
			alert('É necessário votar pelo menos em uma proposta')
			setIsVoting(false)
			return
		}

		// certificamos que o usuário delega seus tokens para o voto
		try {
			//verifica se a carteira precisa delegar os tokens antes de votar
			const delegation = await props.token.getDelegationOf(props.address)
			// se a delegação é o endereço 0x0 significa que eles não delegaram seus tokens de governança ainda
			if (delegation === AddressZero) {
				//se não delegaram ainda, teremos que delegar eles antes de votar
				await props.token.delegateTo(props.address)
			}
			// então precisamos votar nas propostas
			try {
				await Promise.all(
					votes.map(async ({ proposalId, vote: _vote }) => {
						// antes de votar, precisamos saber se a proposta está aberta para votação
						// pegamos o último estado da proposta
						const proposal = await props.vote.get(proposalId)
						// verifica se a proposta está aberta para votação (state === 1 significa está aberta)
						const STATUS_OPEN = 1
						if (proposal.state === STATUS_OPEN) {
							// se está aberta, então vota nela
							return props.vote.vote(proposalId, _vote)
						}
						// se a proposta não está aberta, returna vazio e continua
						return Promise.resolve()
					})
				)
				try {
					// se alguma proposta está pronta para ser executada, fazemos isso
					// a proposta está pronta para ser executada se o estado é igual a 4
					await Promise.all(
						votes.map(async ({ proposalId }) => {
							// primeiro pegamos o estado da proposta novamente, dado que podemos ter acabado de votar
							const proposal = await props.vote.get(proposalId)

							//se o estado é igual a 4 (pronta para ser executada), executamos a proposta
							const READY_TO_VOTE = 4
							if (proposal.state === READY_TO_VOTE) {
								return props.vote.execute(proposalId)
							}
							return Promise.reject()
						})
					)
					// se chegamos aqui, significa que votou com sucesso, então definimos "hasVoted" como true
					setHasVoted(true)
					console.log('votado com sucesso')
				} catch (err) {
					console.error('falha ao executar votos', err)
				}
			} catch (err) {
				console.error('falha ao votar', err)
			}
		} catch (err) {
			console.error('falha ao delegar tokens')
		} finally {
			// de qualquer modo, volta isVoting para false para habilitar o botão novamente
			setIsVoting(false)
		}
	}

	// Nós também precisamos checar se o usuário já votou.
	useEffect(() => {
		// Se nós não tivermos terminado de recuperar as propostas do useEffect acima
		// então ainda nao podemos checar se o usuário votou!
		if (!props.proposals.length || !props.vote) {
			return
		}

		const checkIfUserHasVoted = async () => {
			try {
				const hasVoted = await props.vote.hasVoted(
					props.proposals[0].proposalId.toString(),
					props.address
				)
				setHasVoted(hasVoted)
				if (hasVoted) {
					console.log('🥵 Usuário já votou')
				} else {
					console.log('🙂 Usuário ainda não votou')
				}
			} catch (error) {
				console.error('Falha ao verificar se carteira já votou', error)
			}
		}
		checkIfUserHasVoted()
	}, [props.proposals, props.address, props.vote])

	const proposals = () => {
		proposalKeys = []
		const fields = props.proposals.map((proposal) => {
			const key = formatAddress(proposal.proposalId.toHexString())
			proposalKeys.push(key)
			return (
				<div>
					<Styled.FieldSet key={key}>
						<legend>{key}</legend>
						<Styled.FormLabel>
							{proposal.description}
						</Styled.FormLabel>
						<Styled.FormLabelInput>
							Não:{' '}
							<input type='radio' name={key} value={AGAINST} />
						</Styled.FormLabelInput>
						<Styled.FormLabelInput>
							Sim: <input type='radio' name={key} value={FOR} />
						</Styled.FormLabelInput>
						<Styled.FormLabelInput>
							Abster:{' '}
							<input type='radio' name={key} value={ABSTAIN} />
						</Styled.FormLabelInput>
					</Styled.FieldSet>
				</div>
			)
		})
		return fields
	}

	return (
		<Styled.Section>
			{visibility ? (
				<>
					<Styled.P
						onClick={() => {
							setVisibility((old) => !old)
						}}
					>
						Propostas na nossa DAO 👆
					</Styled.P>
					<Styled.LabelSmall>
						Vote para direcionar nosso fundos...
					</Styled.LabelSmall>
					<form
						action='#'
						onSubmit={(event) => {
							event.preventDefault()
							onSubmit(event.target)
						}}
					>
						{proposals()}
						<Styled.FormButton
							disabled={isVoting || hasVoted}
							type='submit'
						>
							{isVoting
								? 'Votando...'
								: hasVoted
								? 'Você já votou'
								: 'Enviar Votos'}
						</Styled.FormButton>
						{!hasVoted && (
							<Styled.FormLabelSmall>
								Isso irá submeter várias transações que você
								precisará assinar.
							</Styled.FormLabelSmall>
						)}
					</form>
				</>
			) : (
				<Styled.P
					onClick={() => {
						setVisibility((old) => !old)
					}}
				>
					Propostas na nossa DAO 👇
				</Styled.P>
			)}
		</Styled.Section>
	)
}
