import styled from "styled-components";


export const InputContainer = styled.div`
   align-items: center;
   display: flex;
   height: 60px;
   gap: 10px;
   width: 44%;
   border-radius: 10px;
   bottom: 23px;
   position: fixed;
   background-color: #0c0c0e;
 `;
export const MessageFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 0;
  height: 5vh;
`;

export const UserInput = styled.input`
  border-radius: 5px;
  margin-left: 8px;
  border: none;
  width: 60px;
  height: 40px;
  padding-left: 10px;
`;

export const TextInput = styled.input`
 border-radius: 5px;
padding-left: 10px;
border: none;
width: 435px;
height: 40px;
`;

export const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  background: none ;
  font-size: 30px;
     color: white;
`;
