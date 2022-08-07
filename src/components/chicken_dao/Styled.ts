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
	max-width: 20em;
	overflow-wrap: break-word;
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
	margin-bottom: 3em;
	text-align: center;

	small {
		font-size: 0.6em;
	}

	ul {
		margin: auto;
		width: fit-content;
	}
`

export const P = styled.p`
	color: var(--blue-light);
	cursor: pointer;
	font-size: 1.5em;
	font-weight: 900;
	text-decoration: underline;
`

export const LabelSmall = styled.label`
	font-size: 0.9em;
`

export const FieldSet = styled.fieldset`
	border-radius: 0.5em;
	border-width: 0.2em;
	margin-top: 1em;
	padding: 1em;

	legend {
		color: var(--blue-light);
		font-weight: 900;
	}
`

export const FormLabel = styled(Label)`
	color: var(--blue-light);
	font-weight: 900;
	margin-bottom: 1em;
`

export const FormLabelInput = styled.label`
	background-color: var(--creme);
	border-radius: 3em;
	color: var(--black);
	margin: 0.5em;
	padding: 0.5em;
	font-weight: 900;

	input[type='radio'] {
		transform: scale(1.5);
	}

	input {
		accent-color: var(--black);
	}
`

export const FormButton = styled(Button)`
	display: block;
	font-size: 1.2em;
	margin: 2em auto 0em;
	height: 2em;
	padding: 0.5em;
`

export const FormLabelSmall = styled.label`
	font-size: 0.7em;
`
