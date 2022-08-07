import sdk from './1-initialize-sdk.js'
import dotenv from 'dotenv'

dotenv.config()

// Esse é o endereço do nosso contrato ERC-1155 do NFT de filiação.
const editionDrop = sdk.getEditionDrop(
	process.env.NEXT_PUBLIC_EDITION_DROP_ADDRESS
)

// Esse é o endereço do nosso contrato ERC-20 impresso no passo anterior.
const token = sdk.getToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS)

const run = async () => {
	try {
		const TOKEN_ID = 0
		// Pegue o endereço de todas as pessoas que possuem o nosso NFT de filiação, que tem
		// o tokenId 0.
		const walletAddresses =
			await editionDrop.history.getAllClaimerAddresses(TOKEN_ID)

		if (walletAddresses.length === 0) {
			console.log(
				'Ninguém mintou o NFT ainda, peça para alguns amigos fazerem isso e ganhar um NFT de graça!'
			)
			process.exit(0)
		}

		// faça um loop no array de endereços.
		const airdropTargets = walletAddresses.map((address) => {
			// Escolha um # aleatório entre 10 e 100.
			const randomAmount = Math.floor(Math.random() * (100 - 10 + 1) + 10)
			console.log('✅ Vai enviar', randomAmount, 'tokens para ', address)

			// Configure o alvo.
			const airdropTarget = {
				toAddress: address,
				amount: randomAmount,
			}

			return airdropTarget
		})

		// Chame transferBatch em todos os alvos do airdrop.
		console.log('🌈 Começando o airdrop...')
		await token.transferBatch(airdropTargets)
		console.log('✅ Feito o airdrop de tokens para todos os donos de NFT!')
	} catch (err) {
		console.error('O airdrop de tokens falhou', err)
	}
}
run()
