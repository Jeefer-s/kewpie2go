import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 8px;
  display: flex;
  margin: 4px;
  flex-direction: column;
  width: 320px;
  height: 360px;
  border: 1px white solid;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
`;

export const ItemInfoContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'n n n n n n p p '
    'd d d d d d d d '
    'd d d d d d d d ';
`;

export const ItemImage = styled.img`
  src: ${(props) => props.src};
  width: 320px;
  height: 240px;
  object-fit: fill;
  border-radius: 4px;
`;

export const ItemPrice = styled.div`
  display: grid;
  grid-area: p;
  background-color: #b3cbd4a4;
  padding: '0 8px';
  border: '1px solid rgba(255, 255, 255, 0.7)';
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.div`
  display: grid;
  grid-area: n;
`;

export const ItemDescription = styled.div`
  color: #6d6060;
  grid-area: d;
  margin-top: 1px;
  border-radius: 4px 4px 6px 6px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: '0 8px';
  border: '1px solid rgba(255, 255, 255, 0.7)';
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
