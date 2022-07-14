import React from 'react'
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
    /* margin: 16px; */
    display: inline-block;
    position: relative;
`
const ProfilePicture = styled.img`
    display: block;
    width: 350px;
    height: 425px; 
`

const ProfileInfo = styled.div`
    padding: 0 23px;
    position: absolute;
    bottom: -5px;
    right: 0px fixed;
    width: 304px;
    font-size: 15px;
    color: white;
    text-shadow: 0px 0px 5px black;
    background-image: linear-gradient( rgba(1,0,0,0), rgba(1,0,0,1))
`
function ProfileCard(props) {
    const profile = props.profile
  return (
    <ProfileCardContainer>
        <ProfilePicture src={profile.photo}/>
        <ProfileInfo>
            <h3>{profile.name} {profile.age}</h3>
            <p>{profile.bio}</p>
        </ProfileInfo>
    </ProfileCardContainer>
  )
}

export default ProfileCard