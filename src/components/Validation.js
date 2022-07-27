import styled, {css} from 'styled-components';
const colors = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}
const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colors.error};
	display: none;
	${props => props.valid === true && css`
		display: none;
	`}
	${props => props.valid === false && css`
		display: block;
	`}
`;

export {

	LeyendaError,
	
};