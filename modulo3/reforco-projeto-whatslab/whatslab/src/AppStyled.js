import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 600px;
  height: 93vh;
  /* border: 1px solid black; */
  border-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: url("https://wallpaper.dog/large/20525754.jpg") ;
  margin: 0 auto;
  overflow-y: scroll;
  scrollbar-color:#0c0c0e ;

  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(90, 90, 90);
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}
`;

export const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

export const Container = styled.div`
  height: 100%;
  padding: 13px;
  background-color: #202022;
`;
