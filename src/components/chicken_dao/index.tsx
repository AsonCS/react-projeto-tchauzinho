import React, { useEffect, useState, createRef } from 'react'

// Import thirdweb provider and Rinkeby ChainId
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import Home from './home'

export default function ChickenDAOApp() {
	// This is the chainId your dApp will work on.
	const activeChainId = ChainId.Rinkeby

	return (
		<ThirdwebProvider desiredChainId={activeChainId}>
			<Home />
		</ThirdwebProvider>
	)
}
