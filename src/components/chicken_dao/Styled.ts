import styled from 'styled-components'

export const Div = styled.div`
	background-color: var(--gray);
	border-radius: 2em;
	color: var(--white);
	margin-bottom: 5em;
	padding: 2em;
	text-align: center;
`

export const H1 = styled.h1`
	font-size: 3em;
	margin-bottom: 2em;
`

export const H2 = styled.h2`
	margin-bottom: 3em;
	text-shadow: 4px 4px var(--blue-alpha);
`

export const Label = styled.label`
	display: block;
`

export const Button = styled.button`
	background-color: var(--blue);
	border: none;
	border-radius: 1em;
	box-shadow: 0.2em 0.2em 0em var(--blue-alpha);
	color: var(--white);
	margin-bottom: 1em;
	padding: 1em;
	font-size: 1.5em;
	font-weight: 800;
`

export const Section = styled.section`
	font-size: 1.5em;

	p {
		font-weight: 900;
	}

	small {
		font-size: 0.6em;
	}

	ul {
		margin: auto;
		width: fit-content;
	}
`
