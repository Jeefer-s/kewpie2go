import styled, { css } from 'styled-components';

const errorStyles = css`
  color: darkred;
`;
const successStyles = css`
  color: darkgreen;
`;

export const NotificationContainer = styled.div`
  margin-bottom: 20px;
  color: darkgrey;
  ${(props) => (props.error ? errorStyles : '')}
  ${(props) => (props.success ? successStyles : '')}
`;
