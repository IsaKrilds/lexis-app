import React from 'react';
import { Typography } from '@material-ui/core';
import {
  BannerContainer,
  StyledButton,
  TypographyContainer,
  StyledImage,
  HeaderTypographyContainer,
  FooterTypographyContainer,
} from './styles';
import logoLight from '../../assets/images/logo-white.png';
import logoDark from '../../assets/images/logo-dark.png';

interface BannerProps {
  title: string;
  subtitle: string;
  value: string;
  theme: string;
  background: any;
}

const CarouselItem: React.FC<BannerProps> = ({
  title,
  subtitle,
  value,
  theme,
  background,
}) => {
  const logo = theme === 'dark' ? logoLight : logoDark;
  const color = theme === 'dark' ? 'white' : 'black';

  return (
    <BannerContainer color={color} image={background}>
      <HeaderTypographyContainer>
        <StyledImage src={logo} />
        <Typography variant="h5">{title}</Typography>
      </HeaderTypographyContainer>
      <TypographyContainer>
        <Typography variant="subtitle1">{subtitle} </Typography>
      </TypographyContainer>
      <FooterTypographyContainer>
        <Typography variant="h6">R$</Typography>
        <Typography variant="h4">{value}</Typography>
        <StyledButton>
          <Typography variant="subtitle2">Saiba mais</Typography>
        </StyledButton>
      </FooterTypographyContainer>
    </BannerContainer>
  );
};

export default CarouselItem;
