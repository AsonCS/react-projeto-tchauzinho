import { AddressZero } from '@ethersproject/constants'
import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const run = async () => {
	try {
		const editionDropAddress = await sdk.deployer.deployEditionDrop({
			// O nome da coleção, ex. CryptoPunks
			name: 'ChickenDAO',
			// Uma descrição para a coleção.
			description: 'A DAO dos investidores de frangos',
			// Uma imagem para a coleção que vai aparecer no OpenSea.
			image: readFileSync('scripts/assets/image_chicken_dao.png'),
			// Nós precisamos passar o endereço da pessoa que vai estar recebendo os rendimentos das vendas dos nfts do módulo.
			// Nós estamos planejando não cobrar as pessoas pelo drop, então passaremos o endereço 0x0
			// você pode configurar isso para sua própria carteira se você quiser cobrar pelo drop.
			primary_sale_recipient: AddressZero,
		})

		// essa inicialização retorna o endereço do nosso contrato
		// usamos para inicializar o contrato no sdk
		const editionDrop = sdk.getEditionDrop(editionDropAddress)

		// com isso, temos os metadados no nosso contrato
		const metadata = await editionDrop.metadata.get()

		console.log(
			'✅ Contrato editionDrop implantado com sucesso, endereço:',
			editionDropAddress
		)
		console.log('✅ bundleDrop metadados:', metadata)
	} catch (error) {
		console.log('falha ao implantar contrato editionDrop', error)
	}
}
run()

/*
Chicken DAO = 0xF684BCDcF6194c52A6D3a075e0dc5FdDC9E986BA
Image: 'https://gateway.ipfscdn.io/ipfs/QmSZCCrbFKo2TS4RVxbN9JAqtzWSu6AqDxPZmPa6FELpM8/0'
*/
