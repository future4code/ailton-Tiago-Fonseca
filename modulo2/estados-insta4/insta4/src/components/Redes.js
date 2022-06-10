// import React, {Component} from 'react'
// import styled from 'styled-components'
// import iconeFace from '../../img/face.png'
// import iconeInsta from '../../img/insta.png'
// import iconeTwiter from '../../img/twit.png'

// const RedesSociasContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 5px;
// `

// const IconeRedesSocias = styled.input`
//     height: 40px;
//     display: flex;
//     align-items: center;
//     padding: 0 10px;
//      justify-content: space-between;
// `

// export class RedesSociais extends React.Component {
// 	state = {
// 		buttonRedes:""
// 	}

// 	onChangeRedes =(event) => {
// 		console.log(event.target.value);
// 		this.setState({
// 			buttonRedes: event.target.value
// 		});
// 	}

// 	render() {
// 		return <RedesSociasContainer>
// 			<IconeRedesSocias
// 				placeholder={'Comentário'}
// 				value={this.state.inputComentario}
// 				img={this.iconeFace}
// 			/>
// 			<a img={this.props.redesSociais}/>
// 		</RedesSociasContainer>
// 	}
// }