import Head from 'next/head'
import React from 'react'

import ChickenDAOApp from '../src/components/chicken_dao'

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
				<meta name='og:title' content='Chicken DAO 🐣🐥🐔🐓' />
				<title>Chicken DAO 🐣🐥🐔🐓</title>
				<meta name='description' content='Chicken DAO 🐣🐥🐔🐓' />

				{/* <!-- Facebook --> */}
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://github.com/AsonCS/react-projeto-tchauzinho'
				/>
				<meta property='og:title' content='Chicken DAO 🐣🐥🐔🐓' />
				<meta property='og:description' content='Chicken DAO 🐣🐥🐔🐓' />
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
				<meta property='twitter:title' content='Chicken DAO 🐣🐥🐔🐓' />
				<meta property='twitter:description' content='Chicken DAO 🐣🐥🐔🐓' />
				<meta
					property='twitter:image'
					content='https://portal-do-tchauzinho.web.app/favicon.ico'
				/>
			</Head>
			<ChickenDAOApp />
		</>
	)
}
