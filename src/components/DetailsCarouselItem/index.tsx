import { Typography } from '@material-ui/core';
import React from 'react';
import { Container } from './styles';
import bannerImage from '../../assets/images/banner-pic.jpg';

const DetailsCarouselItem: React.FC = () => {
  return (
    <Container>
      <img src={bannerImage} alt="banner-img" />
      <Typography variant="caption">
        Bacon ipsum dolor amet shankle venison pork loin prosciutto, tail ham hock
        turducken pastrami meatball sausage. Burgdoggen pig kevin, turkey meatloaf beef
        ribs biltong ham.
      </Typography>
    </Container>
  );
};

export default DetailsCarouselItem;
