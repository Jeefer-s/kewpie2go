import styled from 'styled-components';

export const ReservationPageContainer = styled.div`
  width: 80%;
  align-self: center;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  margin: 10px 16px;
  justify-content: center;
  background: whitesmoke;
  color: darkslategrey;
  h2 {
    align-self: center;
  }
`;

export const RulesContainer = styled.div`
  margin: 24px auto;
  background-color: white;
  width: 70%;
  border-radius: 12px;
  padding: 8px;

  li {
    font-style: italic;
    line-height: 1.5rem;
  }

  span {
    font-size: smaller;
  }
`;
