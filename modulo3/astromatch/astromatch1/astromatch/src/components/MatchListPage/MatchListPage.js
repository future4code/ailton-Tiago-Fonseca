import React, { useEffect, useState } from "react";
import axios from 'axios';
import MatchListaItem from "./MatchListaItem";
import styled from "styled-components";

const ListContainer = styled.div`
  padding: 8px;
`;

function MatchListPage() {
    const [matches, setMatches] = useState([])
  
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-fonseca-ailton/matches"

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.matches);
      setMatches(response.data.matches);
    });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListaItem profile={profile} />;
      })}
    </ListContainer>
    
  );
}

export default MatchListPage;
