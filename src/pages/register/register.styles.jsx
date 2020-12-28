import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

export const RegisterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 12px;

  h3 {
    text-align: center;
  }

  form {
    width: 90%;
    margin: 0 auto;
    input {
      width: 100%;
    }

    ${mediaQueries('lg')`
    width: 640px`}
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  button {
    margin: 12px;
  }
`;
