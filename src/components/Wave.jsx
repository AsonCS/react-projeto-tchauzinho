import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
	border-color:#302eac;
	border-radius: 12px;
	border-style: solid;
	border-width: 0.3em;
	margin-bottom: 1.5em;
	padding: 1.5em;
`

const UserLabel = styled.label`
	font-weight: 900;
	color: #302eac;
`

const SubscribedAtLabel = styled.label`
	font-size: 0.8em;
	font-weight: 900;
	color: #9999aa;
`

const LikesLabel = styled.label`
	font-weight: 900;
	color: #9999aa;
`

const Image = styled.img`
	cursor: pointer;
	padding: 0.3em;
	width: 2em;
`

const Ul = styled.ul`
	list-style-image: url("images/waving_hand.svg");
`

const Li = styled.li`
	border-bottom: 1px solid #bbbbcc;
	margin-bottom: 0.8em;
`

export default function Wave(wave, doLike) {
	return (
		<Div key={wave.user}>
			<UserLabel>Usuário: {wave.user}</UserLabel>
			<br />
			<SubscribedAtLabel>
				Começou em: {wave.subscribedAt}
			</SubscribedAtLabel>
			<br />
			<LikesLabel>Número de Likes 👍👍👍: {wave.likes}</LikesLabel>
			<br />
			<Image
				onClick={() => doLike(wave.user)}
				src='images/thumb_up.svg'
				alt='Curtir esse usuário'
			/>
			<Ul>
				{wave.messages.map((message, idx) => {
					return <Li key={idx}>{message}</Li>
				})}
			</Ul>
		</Div>
	)
}
