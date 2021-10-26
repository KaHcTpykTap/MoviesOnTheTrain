import styled from 'styled-components'

export const CreateContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  
  .h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }
  
  input, textarea {
    width: 100%;
    margin: 1vh 0;
    padding: 1vh 0;
    white-space: normal;
  }
  
  button {
    width: 100%;
    height: 40px;
    background-color: #50C1E9;
    border: none;
    color: #F5F7FA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1vh 0;
  }
`;