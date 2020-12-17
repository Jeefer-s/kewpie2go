import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background-color: transparent;
  border-radius: 4px;
  margin: 8px;
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding: 2px;
`;

export const Title = styled.h2`
  color: darkslategrey;
`;

export const CategoryContainer = styled.div`
  background: whitesmoke;
  padding: 6px;
  margin: 3px;
`;
