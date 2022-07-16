import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const ResetMatchs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  
  
  /* padding-top: 10px; */

  button {
    background-color: #fd2b76;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    :hover {
      background-color: #98223c;
      color: white;
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
`

function ResetButton() {
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-fonseca-ailton/clear"
  const onClickReset = () => {
    axios.put(url)
    .then(response => {
      console.log(response)
    })
  }
  return (
    <ResetMatchs>
     <button onClick={onClickReset}> Reset Matches</button>
    </ResetMatchs>
  );
}

export default ResetButton;
