import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario (props) {


	const onChangeComentario = (event) => {
		console.log(event.target.value)
		// inputComentario: event.target.value
	}

	
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={props.inputComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	
}

export default SecaoComentario;
