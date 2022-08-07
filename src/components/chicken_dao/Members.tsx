import React, { useState } from 'react'

import * as Styled from './Styled'

interface Props {
	memberList: Array<{
		address: any
		tokenAmount: any
	}>
}

export default function Members(props: Props) {
	const [visibility, setVisibility] = useState(false)

	// Uma função para diminuir o endereço da carteira de alguém, não é necessário mostrar a coisa toda.
	const formatAddress = (str) => {
		return str.substring(0, 6) + '...' + str.substring(str.length - 4)
	}

	const formatTokenAmount = (value: any) => {
		return parseFloat(value).toFixed(2).padStart(10, '0')
	}

	const membersList = () => {
		if (visibility) {
			return (
				<>
					<Styled.P
						onClick={() => {
							setVisibility((old) => !old)
						}}
					>
						Lista de Membros 👆
					</Styled.P>
					<Styled.LabelSmall>
						Endereço Wallet / Quantidade de $CLUCK
					</Styled.LabelSmall>
					<ul>
						{props.memberList.map((member) => {
							return (
								<li key={member.address}>
									{formatAddress(member.address)}:{' '}
									{formatTokenAmount(member.tokenAmount)}
								</li>
							)
						})}
					</ul>
				</>
			)
		} else {
			return (
				<Styled.P
					onClick={() => {
						setVisibility((old) => !old)
					}}
				>
					Lista de Membros 👇
				</Styled.P>
			)
		}
	}

	return <Styled.Section>{membersList()}</Styled.Section>
}
