import styled from 'styled-components'

export const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 64px;
`

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 600px;
`

export const Header = styled.header`
	color: #302eac;
	font-weight: 900;
	text-align: center;
	font-size: 32px;
	font-weight: 600;
	text-shadow: 1px 1px #9999aa;
`

export const Bio = styled.div`
	text-align: center;
	color: gray;
	margin-top: 16px;
`

export const Input = styled.input`
	background-color: #0000ff33;
	margin: 16px auto;
	padding: 8px;
	border: 0;
	border-radius: 10px;
	width: fit-content;
`

export const WaveInput = styled(Input)`
	width: 200px;
`

export const WaveButton = styled.button`
	background-color: #0000ff33;
	cursor: pointer;
	display: block;
	margin: 16px auto;
	padding: 8px;
	border: 0;
	border-radius: 10px;
	width: 200px;
`

export const WaveDiv = styled.div`
	border-color: #302eac;
	border-radius: 12px;
	border-style: solid;
	border-width: 0.3em;
	margin-bottom: 1.5em;
	padding: 1.5em;
`

export const WaveUserLabel = styled.label`
	font-weight: 900;
	color: #302eac;
`

export const WaveSubscribedAtLabel = styled.label`
	font-size: 0.8em;
	font-weight: 900;
	color: #9999aa;
`

export const WaveLikesLabel = styled.label`
	font-weight: 900;
	color: #9999aa;
`

export const WaveImage = styled.img`
	cursor: pointer;
	padding: 0.3em;
	width: 2em;
`

export const WaveUl = styled.ul`
	list-style-image: url('waving_hand.svg');
	margin-left: 2em;
`

export const WaveLi = styled.li`
	border-bottom: 1px solid #bbbbcc;
	margin-bottom: 0.8em;
`

export const ShotForm = styled.form`
	text-align: center;
`

export const ShotTable = styled.table`
	display: inline-block;
	margin: auto;
`

export const ShotTd = styled.td`
	background-color: #0000ff33;
	border: 0;
	border-radius: 0.5em;
	padding: 0.5em;
	text-align: center;
`

export const ShotLabeInput = styled.label`
	background-color: #0000ff33;
	border: 0;
	border-radius: 10px;
	display: inline-block;
	margin: 0.3em;
	padding: 0px 0.3em;
`

export const ShotLabeValue = styled.label`
	background-color: #0000ff33;
	border: 0;
	border-radius: 10px;
	margin: 0.3em auto;
	padding: 0px 0.3em;
	width: fit-content;
`

export const ShotSmall = styled.small`
	color: gray;
	font-size: 0.6em;
`
