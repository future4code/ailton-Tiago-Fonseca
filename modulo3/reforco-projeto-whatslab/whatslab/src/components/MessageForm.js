import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import {
  MessageFormContainer,
  SendButton,
  TextInput,
  UserInput,
  InputContainer,
} from "./StyledMessageForm";

function MessageForm(props) {
  const [userValue, setUserValue] = useState("eu");
  const [textValue, setTextValue] = useState("");

  const onChangeUser = (event) => {
    setUserValue(event.target.value);
  };

  const onChangeText = (event) => {
    setTextValue(event.target.value);
  };

  const onSendMessage = (event) => {
    event.preventDefault();
    const message = {
      user: userValue,
      text: textValue,
    };

    props.addMessage(message);

    setTextValue("");
  };

  return (
    // desafio: com a tag form é possível fazer o envio da mensagem com o botão "enter"
    <MessageFormContainer onSubmit={onSendMessage}>
      <InputContainer>
        <UserInput
          type="text"
          placeholder={"Usuário"}
          onChange={onChangeUser}
          value={userValue}
        />
        <TextInput
          type="text"
          placeholder={"Mensagem"}
          onChange={onChangeText}
          value={textValue}
        />
        <SendButton>
          <AiOutlineSend />
        </SendButton>
      </InputContainer>
    </MessageFormContainer>
  );
}

export default MessageForm;
