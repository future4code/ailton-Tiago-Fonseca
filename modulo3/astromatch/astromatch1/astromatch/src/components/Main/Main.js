import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import styled from "styled-components";

const MainContainer = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 350px;
  height: 540px;
  margin: 27px auto;
  display: flex;
  flex-direction: column;
  background-color: white;
`

function Main() {
  const [selectedPage, setSelectedPage] = useState("choose-profile");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "choose-profile":
        return <ChooseProfilePage />;
      case "match-list":
        return <MatchListPage />;
      default:
        return <ChooseProfilePage />;
    }
  };

  const gotoChooseProfilePage = () => {
    setSelectedPage("choose-profile");
  };

  const gotoMatchListPage = () => {
    setSelectedPage("match-list");
  };

  return (
    <MainContainer>
      <AppBar
        gotoChooseProfilePage={gotoChooseProfilePage}
        gotoMatchListPage={gotoMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  );
}

export default Main;
