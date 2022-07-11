import Head from 'next/head'
import React from 'react'

import NftsApp from '../src/components/nfts'

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
				<meta name='og:title' content='Vem gerar seu NFT...' />
				<title>Vem gerar seu NFT...</title>
				<meta
					name='description'
					content='Vem gerar seus NFTs aqui, pode colocar sua mensagem nele...'
				/>

				{/* <!-- Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://github.com/AsonCS/react-projeto-tchauzinho' />
				<meta property='og:title' content='Vem gerar seu NFT...' />
				<meta
					property='og:description'
					content='Vem gerar seus NFTs aqui, pode colocar sua mensagem nele...'
				/>
				<meta
					property='og:image'
					content='https://github.com/AsonCS/react-projeto-tchauzinho/raw/master/public/favicon.ico'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://github.com/AsonCS/react-projeto-tchauzinho'
				/>
				<meta property='twitter:title' content='Vem gerar seu NFT...' />
				<meta
					property='twitter:description'
					content='Vem gerar seus NFTs aqui, pode colocar sua mensagem nele...'
				/>
				<meta
					property='twitter:image'
					content='https://github.com/AsonCS/react-projeto-tchauzinho/raw/master/public/favicon.ico'
				/>
			</Head>
			<NftsApp />
		</>
	)
}
