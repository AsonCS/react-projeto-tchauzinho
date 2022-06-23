import React from 'react'

import {
	WaveDiv,
	WaveUserLabel,
	WaveSubscribedAtLabel,
	WaveLikesLabel,
	WaveImage,
	WaveUl,
	WaveLi,
} from '../../styled'

export default function Wave(wave, doLike) {
	return (
		<WaveDiv key={wave.user}>
			<WaveUserLabel>Usuário: {wave.user}</WaveUserLabel>
			<br />
			<WaveSubscribedAtLabel>
				Começou em: {wave.subscribedAt}
			</WaveSubscribedAtLabel>
			<br />
			<WaveLikesLabel>
				Número de Likes 👍👍👍: {wave.likes}
			</WaveLikesLabel>
			<br />
			<WaveImage
				onClick={() => doLike(wave.user)}
				src='thumb_up.svg'
				alt='Curtir esse usuário'
			/>
			<WaveUl>
				{wave.messages.map((message, idx) => {
					return <WaveLi key={idx}>{message}</WaveLi>
				})}
			</WaveUl>
		</WaveDiv>
	)
}
