import React from 'react';
import {
  ContactContainer,
  RowContainer,
  ImageContainer,
  TextContainer,
} from './contact.styles';

const Contact = () => (
  <ContactContainer>
    <h3>Contact us</h3>
    <RowContainer>
      <ImageContainer>
        <img src='/images/icons/ic-call.svg' alt='' />
      </ImageContainer>
      <TextContainer>+31702670700</TextContainer>
    </RowContainer>
    <RowContainer>
      <ImageContainer>
        <img src='/images/icons/ic-mail.svg' alt='' />
      </ImageContainer>
      <TextContainer>info@kewpie.nl</TextContainer>
    </RowContainer>
    <RowContainer>
      <ImageContainer>
        <img src='/images/icons/ic-place.svg' alt='' />
      </ImageContainer>
      <TextContainer>
        Statenlaan 1 <br />
        2400PJ
        <br />
        The Hague
      </TextContainer>
    </RowContainer>
  </ContactContainer>
);

export default Contact;
