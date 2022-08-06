import React, { createRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { AppNav } from '../../styled'

export default function AppNavigation() {
	return (
		<AppNav>
			<Link
				href={`/teste_na_blockchain${process.env.NEXT_PUBLIC_URL_EXTENSION}`}
			>
				<a>Portal do Tchauzinho</a>
			</Link>
			<Link
				href={`/loteria_apostas${process.env.NEXT_PUBLIC_URL_EXTENSION}`}
			>
				<a>Loteria Apostas</a>
			</Link>
			<Link href={`/nft_epic${process.env.NEXT_PUBLIC_URL_EXTENSION}`}>
				<a>Vem gerar seu NFT...</a>
			</Link>
			<Link href={`/chicken_dao${process.env.NEXT_PUBLIC_URL_EXTENSION}`}>
				<a>Chicken DAO</a>
			</Link>
		</AppNav>
	)
}
