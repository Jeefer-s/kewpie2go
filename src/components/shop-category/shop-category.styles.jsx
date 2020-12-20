import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background-color: transparent;
  border-radius: 4px;
  margin: 8px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding: 12px;
  h3 {
    margin: 0;
  }
`;

export const CategoryContainer = styled.div`
  background: whitesmoke;
  width: fit-content;
  padding: 6px;
  margin: 3px;
  hr {
    width: 40%;
  }

  @media screen and (max-width: 1300px) {
    width: 900px;
  }

  @media screen and (max-width: 1300px) {
    width: 680px;
  }
`;
