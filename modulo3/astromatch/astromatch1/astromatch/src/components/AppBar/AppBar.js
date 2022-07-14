import React from "react";
import styled from "styled-components";
import LogoAstroMatch from "../../assets/img/atromatch.png";
import { SiTinder } from "react-icons/si";
import { IoIosChatbubbles } from "react-icons/io";



const AppBarCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  padding: 0 8px 8px;

`
const Image = styled.img`
  width: 180px;
  margin-top: 7px;
`
const Button1 = styled.button`
    border:none;
    background-color: white;
    font-size: 25px;
    padding: 0 8px;
    margin-top: 15px;
    color: #fe4755;

    :hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
const Button2 = styled.button`
    border:none;
    background-color: white;
    font-size: 25px;
    padding: 0 8px;
    margin-top: 15px;
    color: #fe4755;

    :hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

function AppBar(props) {
  return (
    <AppBarCotainer>
        <Button1 onClick={props.gotoChooseProfilePage}><SiTinder/></Button1>
        <Image src={LogoAstroMatch}/>
        <Button2 onClick={props.gotoMatchListPage}><IoIosChatbubbles/></Button2>
    </AppBarCotainer>
  );
}

export default AppBar;
 