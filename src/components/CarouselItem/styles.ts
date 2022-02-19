import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const StyledCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BannerContainer = styled.div<{ image: any }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: ${({ theme }) => theme.spacing(40)}px;
  padding: ${({ theme }) => theme.spacing(2)}px ${({ theme }) => theme.spacing(10)}px;
  color: ${(props) => props.color || 'black'};
  border-bottom: 4px solid ${({ theme }) => theme.palette.warning.main};
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const StyledButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.warning.main},
    ${({ theme }) => theme.palette.warning.dark}
  );
  width: ${({ theme }) => theme.spacing(15)}px;
  color: ${({ theme }) => theme.palette.common.white};
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const TypographyContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
`;

export const HeaderTypographyContainer = styled(TypographyContainer)`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const FooterTypographyContainer = styled(TypographyContainer)`
  margin: ${({ theme }) => theme.spacing(2)}px 0 0 0;
  align-items: flex-end;
`;

export const StyledImage = styled.img`
  width: 150px !important;
  border-right: 1px solid #fff !important;
  padding: 0 ${({ theme }) => theme.spacing(3)}px ${({ theme }) => theme.spacing(2)}px 0;
  margin: 0 ${({ theme }) => theme.spacing(3)}px 0 0;
`;
