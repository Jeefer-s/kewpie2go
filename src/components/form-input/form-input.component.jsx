import React from 'react';

import { Container, Input, LabelContainer, Label } from './form-input.styles';

const FormInput = ({ label, ...props }) => {
  return (
    <Container>
      <LabelContainer>
        <Input {...props} />
        <Label className={props.value.length ? 'shrink' : ''}>{label}</Label>
      </LabelContainer>
    </Container>
  );
};

export default FormInput;
