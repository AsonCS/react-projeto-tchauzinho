import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const editionDrop = sdk.getEditionDrop(
	process.env.NEXT_PUBLIC_EDITION_DROP_ADDRESS
)

const run = async () => {
	try {
		await editionDrop.createBatch([
			{
				name: 'Chicken role',
				description: 'Cócó acesso para o DAO',
				image: readFileSync('scripts/assets/image_chicken_dao_nft.png'),
			},
		])
		console.log('✅ Novo NFT criado com sucesso no drop!')
	} catch (error) {
		console.error('falha ao criar o novo NFT', error)
	}
}
run()
