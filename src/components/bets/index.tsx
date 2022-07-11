import React, { createRef, useEffect, useState } from 'react'
import AppNavigation from '../navigation'
import {
	MainContainer,
	DataContainer,
	Header,
	Bio,
	Input,
	WaveButton,
	ShotTd,
	ShotLabeInput,
	ShotLabeValue,
	ShotForm,
	ShotTable,
	ShotSmall,
} from '../../styled'

export default function BetsApp() {
	const [bets, setBets] = useState<Array<JSX.Element>>([])
	const [quinaValue, setQuinaValue] = useState<JSX.Element>(null)

	const numberOfBets = createRef<HTMLInputElement>()
	const numbersByShot = createRef<HTMLInputElement>()
	const maxNumber = createRef<HTMLInputElement>()

	const onGenerateBets = (event) => {
		event.preventDefault()

		const ofBets = parseInt(numberOfBets.current.value)
		const byShot = parseInt(numbersByShot.current.value)
		const maxNum = parseInt(maxNumber.current.value)

		const bets: Array<JSX.Element> = []
		getBets(ofBets, byShot, maxNum).forEach((shot) => {
			const tds = shot.map((num) => <ShotTd>{num}</ShotTd>)
			bets.push(<tr>{tds}</tr>)
		})
		const quinaValue = (
			<ShotLabeValue>
				<b>{`R$ ${getQuinaValue(ofBets, byShot)},00`}</b>
				&nbsp;&nbsp;
				<ShotSmall>
					{'Valor dessa aposta na Quina (23/06/2022)'}
				</ShotSmall>
			</ShotLabeValue>
		)
		setQuinaValue(quinaValue)
		setBets(bets)
	}

	const getQuinaValue = (
		numberOfBets: number,
		numbersByShot: number
	): number => {
		let value = 0
		switch (numbersByShot) {
			case 5:
				value = 2
				break
			case 6:
				value = 12
				break
			case 7:
				value = 42
				break
			case 8:
				value = 112
				break
			case 9:
				value = 252
				break
			case 10:
				value = 504
				break
			case 11:
				value = 924
				break
			case 12:
				value = 1584
				break
			case 13:
				value = 2574
				break
			case 14:
				value = 4004
				break
			case 15:
				value = 6006
				break
		}
		return value * numberOfBets
	}

	const getBets = (
		numberOfBets: number = 15,
		numbersByShot: number = 5,
		maxNumber: number = 80
	): Array<Array<number>> => {
		numberOfBets = numberOfBets < 1 ? 1 : numberOfBets
		numberOfBets = numberOfBets > 50 ? 50 : numberOfBets

		numbersByShot = numbersByShot < 3 ? 3 : numbersByShot
		numbersByShot = numbersByShot > 20 ? 20 : numbersByShot

		maxNumber = maxNumber < 10 ? 10 : maxNumber
		maxNumber = maxNumber > 100 ? 100 : maxNumber

		let bets: Array<Array<number>> = []
		while (bets.length < numberOfBets) {
			let numbers: Array<number> = []
			while (numbers.length < numbersByShot) {
				let number = Math.random() * (maxNumber + 20)
				if (
					!numbers.includes(number) &&
					number >= 11 &&
					number <= maxNumber + 10
				) {
					numbers.push(Math.floor(number - 10))
				}
			}
			bets.push(numbers.sort((num, other) => num - other))
		}

		return bets
	}

	return (
		<MainContainer>
			<AppNavigation />

			<DataContainer>
				<Header>Vamos apostar na Loteria 😁😁😁</Header>

				<Bio>
					Preencha abaixo os campos para gerar as apostas com números
					aletórios...
					<br />
					<em>
						<u>
							Usamos o mesmo mecanismo de geração de números que a{' '}
							<b>Loterias Caixa</b>!!!
						</u>
					</em>
					<br />
					<ShotSmall>brincadeirinha</ShotSmall>
				</Bio>

				<ShotForm action='#' onSubmit={onGenerateBets}>
					<ShotLabeInput>
						{'Quantidade de apostas: '}
						<Input
							type='number'
							id='numberOfBets'
							name='numberOfBets'
							required
							max={50}
							min={1}
							ref={numberOfBets}
							defaultValue={15}
						/>
					</ShotLabeInput>

					<br />

					<ShotLabeInput>
						{'Quantidade de números: '}
						<Input
							type='number'
							id='numbersByShot'
							name='numbersByShot'
							required
							max={20}
							min={3}
							ref={numbersByShot}
							defaultValue={5}
						/>
					</ShotLabeInput>

					<br />

					<ShotLabeInput>
						{'Número máximo: '}
						<Input
							type='number'
							id='maxNumber'
							name='maxNumber'
							required
							max={100}
							min={10}
							ref={maxNumber}
							defaultValue={80}
						/>
					</ShotLabeInput>

					<WaveButton>Gerar Números</WaveButton>
				</ShotForm>

				{quinaValue}

				<ShotTable>
					<tbody>{bets}</tbody>
				</ShotTable>

				<br />
				<br />
				<br />
				<br />
				<br />
			</DataContainer>
		</MainContainer>
	)
}
