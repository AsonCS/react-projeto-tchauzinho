import Head from 'next/head'
import React from 'react'

import BlockchainApp from '../src/components/blockchain'

export default function Component() {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='og:title' content='Portal do Tchauzinho' />
				<title>Portal do Tchauzinho</title>
				<meta
					name='description'
					content='Quero te conhecer! Manda um tchauzinho pra mim vai?'
				/>

				{/* <!-- Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://github.com/AsonCS/react-projeto-tchauzinho' />
				<meta property='og:title' content='Portal do Tchauzinho' />
				<meta
					property='og:description'
					content='Quero te conhecer! Manda um tchauzinho pra mim vai?'
				/>
				<meta
					property='og:image'
					content='https://portal-do-tchauzinho.web.app/favicon.ico'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://github.com/AsonCS/react-projeto-tchauzinho'
				/>
				<meta property='twitter:title' content='Portal do Tchauzinho' />
				<meta
					property='twitter:description'
					content='Quero te conhecer! Manda um tchauzinho pra mim vai?'
				/>
				<meta
					property='twitter:image'
					content='https://portal-do-tchauzinho.web.app/favicon.ico'
				/>
			</Head>
			<BlockchainApp />
		</>
	)
}
