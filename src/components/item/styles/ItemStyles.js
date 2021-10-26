import styled from 'styled-components'

export const ItemContainer = styled.div`

  .imageDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;

    .image {
      max-width: 100%;
      max-height: 100%;
      display: block;
      border: 1px solid black;
    }
  }

  .genres {
    display: flex;
    flex-direction: row;

    .genre {
      border-right: 1px solid black;
      padding: 0 .5vh;
    }
  }
  span {
    font-weight: bold;
  }
    `;