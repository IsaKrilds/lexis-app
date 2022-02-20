import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

export const StyledCarousel = styled(Carousel)`
  .carousel .control-prev.control-arrow {
    :hover {
      background-color: #fff;
    }
    :before {
      border-right: 8px solid #978484;
    }
  }

  .carousel .control-next.control-arrow {
    :hover {
      background-color: #fff;
    }
    :before {
      border-left: 8px solid #978484;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WrapContainer = styled.div`
  width: 80%;
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.palette.warning.light};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledIcon = styled(Icon)`
  color: gray;
  font-size: ${({ theme }) => theme.spacing(5)}px;
  color: ${({ theme }) => theme.palette.warning.light};
`;

export const StyledGoBackButton = styled(Button)`
  color: ${({ theme }) => theme.palette.warning.light};

  :hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 ${({ theme }) => theme.spacing(10)}px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(10)}px 0;
`;

export const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(4)}px 0;
  color: gray;
  padding: 0 ${({ theme }) => theme.spacing(7)}px;

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const PriceContainer = styled(TypographyContainer)`
  color: black;
  flex-direction: row;
  align-items: flex-end;

  h6 {
    margin-right: ${({ theme }) => theme.spacing(1)}px;
  }
`;

export const StyledButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.warning.main},
    ${({ theme }) => theme.palette.warning.dark}
  );
  width: ${({ theme }) => theme.spacing(15)}px;
  color: ${({ theme }) => theme.palette.common.white};
  margin-left: ${({ theme }) => theme.spacing(4)}px;
`;
