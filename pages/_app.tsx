import { AppProps } from 'next/app'
import React from 'react'

import { GlobalStyle } from '../src/styled'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
