import Head from 'next/head'
import React from 'react'

import BetsApp from '../src/components/bets'

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
				<meta name='og:title' content='Loteria Apostas' />
				<title>Loteria Apostas</title>
				<meta
					name='description'
					content='Vem gerar números e ficar rico d+...'
				/>

				{/* <!-- Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://github.com/AsonCS/react-projeto-tchauzinho' />
				<meta property='og:title' content='Loteria Apostas' />
				<meta
					property='og:description'
					content='Vem gerar números e ficar rico d+...'
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
				<meta property='twitter:title' content='Loteria Apostas' />
				<meta
					property='twitter:description'
					content='Vem gerar números e ficar rico d+...'
				/>
				<meta
					property='twitter:image'
					content='https://portal-do-tchauzinho.web.app/favicon.ico'
				/>
			</Head>
			<BetsApp />
		</>
	)
}
