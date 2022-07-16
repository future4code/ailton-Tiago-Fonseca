import React from 'react'
import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f0f0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #111;

  :hover {
    background-color: #f3f0f0;
     }
`
const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
`

function MatchListaItem(props) {
  const profile = props.profile
  return (
    <ListItemContainer>
        <Avatar src={profile.photo}/>
        <p>{profile.name}</p>
    </ListItemContainer>
  )
}

export default MatchListaItem