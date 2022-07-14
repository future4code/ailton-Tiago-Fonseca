import React from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import Dislike from "../../assets/img/dislike.png"
import Like from "../../assets/img/like.png"

const ButtonContaier = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  border-radius: 0px 0px 10px 10px;
`   

const ButtonYes = styled.button`
  align-self: center;
  background-color: black;
  border-radius: 50%;
  border: none;
  margin-bottom: 2px;
 
  img {
    width: 50px;
    height: 50px;
  }

  img:hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
const ButtonNo = styled.button`
  align-self: center;
  background-color: black;
  border: none;
  margin-bottom: 2px;
 
 
  img {
    width: 50px;
    height: 50px;
  }

  
  img:hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
` 
function ChooseButtons(props) {
  return (
    <ButtonContaier>
      <ButtonNo onClick={props.onClickNo}><img src={Dislike}/></ButtonNo>
      <ButtonYes onClick={props.onClickYes}><img src={Like}/></ButtonYes>
    </ButtonContaier>
  );
}

export default ChooseButtons;
