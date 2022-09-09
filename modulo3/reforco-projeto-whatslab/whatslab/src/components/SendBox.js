// import styled from "styled-components";
// import { AiOutlineSend } from "react-icons/ai";
// import { useState } from "react";

// const BoxChatCantainer = styled.div`
//   width: 600px;
//   height: 620px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   background-color: lightgrey;
//   border: 1px solid grey;
//   margin: auto;
// `;
// const InputContainer = styled.div`
//   align-items: center;
//   display: flex;
//   height: 70px;
//   gap: 10px;
//   width: 600px;
//   background-color: grey;

//   p {
//     font-size: 30px;
//     color: white;
//   }

//   input::placeholder {
//     color: grey;
//   }
// `;
// const User = styled.input`
//   border-radius: 5px;
//   margin-left: 8px;
//   border: none;
//   width: 60px;
//   height: 40px;
//   padding-left: 10px;
// `;
// const Mensagem = styled.input`
//   border-radius: 5px;
//   padding-left: 10px;
//   border: none;
//   width: 435px;
//   height: 40px;
// `;

// function SendBox ( ) {
//   const [messages, setMessages] = useState([]);
//   const [user, setUser] = useState("");
//   const [boxMessage, setBoxMessage] = useState("");

//  const onChangeSetUser = (event) => {
//     setUser(event.target.value);
//     console.log(setUser);
//   };

//   const onChangeSetBoxMessage = (event) => {
//     setBoxMessage(event.target.value);
//     console.log(setBoxMessage);
//   };

//   const addNewMessage= (message) => {
//        const newMessages= [...messages, message];

//     setMessages(newMessages);
//     setUser("")
//     setBoxMessage("")
    
//   };

//   const enviarMessage = ( )=> {
//     if(user == "" || boxMessage == ""){
//         alert('Adicione os dados requiridos!');
//     }else{
//         addNewMessage()            
//     }
// }
// const resultMessageMapping = messages.map((message, index) => (
//     <div
//     //   deleteMessage={deleteMessage}
//       message={message}
//       key={index}
//     ></div>
// )
//   return (
//     <div>
//       <BoxChatCantainer>
//         <InputContainer>
//           <User
//             placeholder="Usuário"
//             value={user}
//             onChange={onChangeSetUser}
//           />
//           <Mensagem
//             placeholder="Mensagem"
//             value={boxMessage}
//             onChange={onChangeSetBoxMessage}
//           />
//           <p onClick={enviarMessage}>
//             <AiOutlineSend />
//           </p>
//         </InputContainer>
//       </BoxChatCantainer>
//     </div>
//   );
// }

// export default SendBox;
