import React from 'react';
import { useSelector } from 'react-redux';
import { selectMenuHidden } from '../../redux/header/header.selectors';
import Carousel from '../../components/carousel/carousel.component';

const HomePage = () => {
  const isMenuHidden = useSelector(selectMenuHidden);
  return <div>{isMenuHidden ? <Carousel /> : ''}</div>;
};

export default HomePage;
