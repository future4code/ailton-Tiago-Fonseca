import React, {Component} from 'react'
import styled from 'styled-components'


const RedesSociasContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const IconeRedesSocias = styled.input`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
     justify-content: space-between;
`

export class RedesSociais extends React.Component {
	state = {
		buttonRedes:""
	}

	onChangeRedes =(event) => {
		console.log(event.target.value);
		this.setState({
			buttonRedes: event.target.value
		});
	}

    render() {
		return <RedesSociasContainer>
			<IconeRedesSocias
				placeholder={'Comentário'}
				value={this.state.inputRedes}
				onChange={this.onChangeRedes}
			/>
			<button onClick={this.props.aoFacebook}>Facebook</button>
            <button onClick={this.props.aoTwitter}>Twitter</button>
            <button onClick={this.props.aoInstagram}>Instagram</button>
		</RedesSociasContainer>
	}
}