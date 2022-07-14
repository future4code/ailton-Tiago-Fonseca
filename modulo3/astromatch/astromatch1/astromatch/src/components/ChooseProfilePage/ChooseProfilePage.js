import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import ProfileCard from './ProfileCard';
import Logo from '../../assets/img/gif.gif'
import styled from 'styled-components';

const Gif = styled.img`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`
function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({undefined})

  const getProfileToChoose = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-fonseca-ailton/person"
    axios.get(url)
    .then(response => {console.log(response.data.profile)
    setProfileToChoose(response.data.profile)
  }) 
  }
  
  const chooseProfile =(choice) =>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-fonseca-ailton/choose-person"
    const body = {
      choice: choice,
      id: profileToChoose.id
    }
    setProfileToChoose(undefined) 
    
    axios.post(url, body)
    .then(response =>{
      console.log(response);
      getProfileToChoose()
    })
  }

  useEffect(() => {
    getProfileToChoose()
  }, []);

  const onClickNo = () => {
    chooseProfile(false)

  };

  const onClickYes = () => {
    chooseProfile(true)
  };
  
  return (
    <div>
      { profileToChoose ?
      (<>
        <ProfileCard profile={profileToChoose}/>
        <ChooseButtons onClickNo={onClickNo}onClickYes={onClickYes}/>  
      </>) : <Gif src={Logo}/>
      }
    </div>
  );
}

export default ChooseProfilePage; 