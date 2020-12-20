import React from 'react';
import { AboutPageContainer } from './about.styles';

import AboutSection from './about-section/about-section.component';
import ChefsSection from './chefs-section/chefs-section.component';

const AboutPage = () => (
  <AboutPageContainer>
    <AboutSection />
    <ChefsSection />
  </AboutPageContainer>
);

export default AboutPage;
