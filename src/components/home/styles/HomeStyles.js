import styled from 'styled-components'

export const HomeContainer = styled.div`

  background-color: whitesmoke;
  padding: 0 3vw;

  .buttonDiv {
    padding: 0 0 2vw 2vw;

    button {
      width: 100px;
      height: 40px;
      background-color: #50C1E9;
      border: none;
      color: #F5F7FA;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh 0;
  }
  
  .loader {
    display: flex;
    justify-content: center;
    font-size: 10vh;
  }

`;