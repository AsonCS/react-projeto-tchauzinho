import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	/* Reset CSS (Necolas Reset CSS <3) */
	:root {
		--black: #0d1116;
		--blue: #3772ff;
		--blue-alpha: #3772ff66;
		--blue-light: #00bcd4;
		--green: #36d6ad;
		--white: #ffffff;
		--coral: #fc7071;
		--creme: #fcf0e3;
		--gray: #262626;
		--dark-gray: #737380;
		--light-gray: #bcbcbc;
		--light-2-gray: #f6f6f6;
		--alpha-gray: #66666611;

		--font-main: 'Poppins', sans-serif;
		--font-secondary: 'IBM Plex Sans', sans-serif;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body {
		font-family: var(--font-main);
		line-height: 1.6;
		font-size: 1em;
	}
	#__next {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
	img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	a {
		color: #0070f3;
		cursor: pointer;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:active {
		text-decoration: none;
	}
	button {
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		font-family: var(--font-main);
		height: fit-content;
		margin: 0;
		padding: 0;
		width: fit-content;
	}
`

export const MainContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`

export const MainContainerBlack = styled(MainContainer)`
	background-color: #0d1116;
`

export const DataContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 600px;
	min-height: 80vh;
`

export const AppNav = styled.nav`
	align-self: flex-start;
	margin-left: 1em;
	margin-top: 1em;
	text-decoration: none;

	a {
		background-color: #cccccc;
		border-radius: 0.3em;
		color: #333333;
		font-size: 0.7em;
		font-weight: 900;
		margin: 0.2em;
		padding: 0.2em;
	}

	a:hover {
		background-color: #333333;
		color: #cccccc;
		font-size: 0.8em;
		text-decoration: none;
	}
`

export const Header = styled.header`
	color: #302eac;
	font-size: 32px;
	font-weight: 900;
	text-align: center;
	text-shadow: 1px 1px #9999aa;
`

export const Bio = styled.div`
	color: gray;
	margin-top: 1em;
	text-align: center;

	a {
		display: block;
		font-size: 0.8em;
	}

	p {
		font-size: 0.8em;
	}
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

export const NftInput = styled(Input)`
	color: white;
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
	margin-top: 2em;
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

export const NftHeader = styled(Header)`
	background: -webkit-linear-gradient(left, #60c657 30%, #35aee2 60%);
	background-clip: text;
	font-size: 3em;
	text-shadow: none;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	/* KeyFrames */
	@-webkit-keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-moz-keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`

export const NftBio = styled(Bio)`
	font-size: 1.5em;
	font-weight: 900;
	text-shadow: 1px 1px #bbbbbb;

	a {
		display: block;
		font-size: 1em;
	}

	span {
		display: block;
	}
`

export const NftButton = styled.button`
	animation: gradient-animation 4s ease infinite;
	background: -webkit-linear-gradient(left, #60c657, #35aee2);
	background-size: 200% 200%;
	border: 0;
	border-radius: 2em;
	color: white;
	cursor: pointer;
	display: block;
	font-size: 1em;
	font-weight: 900;
	margin: 2em auto;
	padding: 1em 3em;
	width: fit-content;
`

export const NftFooter = styled.footer`
	display: flex;
	margin: 2em 0;
`

export const NftTwitterLogo = styled.img`
	width: 2em;
	height: 2em;
`

export const NftA = styled.a``
