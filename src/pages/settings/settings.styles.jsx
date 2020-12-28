import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';
import { mediaQueries } from '../../utils/media-queries';

export const SettingsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 12px;

  h3 {
    text-align: center;
  }

  form {
    width: 80%;
    max-width: 640px;
    margin: 12px auto 36px auto;
  }

  input {
    ${mediaQueries('md')`
        width: 85%;
      `}
  }
`;

export const SaveButton = styled(CustomButton)`
  float: left;
  margin: 12px;
  width: 160px;
  background-color: #356349;
  &:hover {
    background-color: #56a679;
  }
`;

export const CancelButton = styled(CustomButton)`
  width: 160px;
  margin: 12px;

  background-color: #a13a3a;
  &:hover {
    background-color: #bf5050;
  }
`;

export const SuccessContainer = styled.div`
  color: darkgreen;
  margin-bottom: 20px;
`;
