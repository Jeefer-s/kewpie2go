import styled from 'styled-components';
import CustomButtom from '../../components/custom-button/custom-button.component';
import { mediaQueries } from '../../utils/media-queries';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 0 auto;

  ${mediaQueries('md')`
  grid-template-columns: repeat(2, 1fr);
  `}

  ${mediaQueries('lg')`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 16px;
  width: 100%;

  grid-template-areas:
    "fn ln"
    "em em"
    "pw cp";


  .first-name{
      grid-area: fn;
  }
  .last-name{
      grid-area: ln;
  }
  .email{
      grid-area: em;
  }
  .password{
      grid-area: pw;
  }
  .confirm-password{
      grid-area: cp;
  }

  `}
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const RegisterButton = styled(CustomButtom)`
  width: 95%;

  margin: 20px auto;

  ${mediaQueries('lg')`
    width: 75%;
    max-width: 480px;
  `}
`;
