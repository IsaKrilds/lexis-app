import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import {
  Container,
  ContentContainer,
  WrapContainer,
  TitleContainer,
  StyledIcon,
  StyledGoBackButton,
  ItemContainer,
  StyledCarousel,
  CarouselContainer,
  TypographyContainer,
  PriceContainer,
  StyledButton,
} from './styles';
import CarouselItem from '../../components/CarouselItem';
import bkg1 from '../../assets/images/bkg-light-1.png';
import bkg2 from '../../assets/images/bkg-light-2.png';
import { CardData } from '../Home/utils';
import DetailsCarouselItem from '../../components/DetailsCarouselItem';

const Details: React.FC = () => {
  const [cardData, setCardData] = useState<any>();
  const { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    const data = CardData.filter((item) => {
      return item.id === Number(id);
    });

    setCardData(data[0]);
  }, []);

  if (!cardData) {
    return null;
  }

  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showArrows={false}
        showStatus={false}
        showThumbs={false}>
        <CarouselItem
          title="Histórico Empresarial"
          subtitle="O aplicativo Histórico Empresarial permite ao usuário ter aceso a todos os fatos
          e acontecimentos relevantes de uma empresa desde seu ano de fundação"
          value="40,00"
          theme="light"
          background={bkg1}
        />
        <CarouselItem
          title="Histórico Empresarial"
          subtitle="O aplicativo Histórico Empresarial permite ao usuário ter aceso a todos os fatos
          e acontecimentos relevantes de uma empresa desde seu ano de fundação"
          value="40,00"
          theme="light"
          background={bkg2}
        />
      </Carousel>
      <ContentContainer>
        <WrapContainer>
          <TitleContainer>
            <StyledGoBackButton onClick={() => history.goBack()}>
              <StyledIcon>chevron_left</StyledIcon>
              <Typography variant="h6">{cardData.title}</Typography>
            </StyledGoBackButton>
          </TitleContainer>

          <CarouselContainer>
            <StyledCarousel
              infiniteLoop
              emulateTouch
              showStatus={false}
              showThumbs={false}
              showIndicators={false}>
              <ItemContainer>
                <DetailsCarouselItem />
              </ItemContainer>
              <ItemContainer>
                <DetailsCarouselItem />
              </ItemContainer>
            </StyledCarousel>
          </CarouselContainer>
          <TypographyContainer>
            <Typography variant="subtitle2">
              Bacon ipsum dolor amet shankle venison pork loin prosciutto, tail ham hock
              turducken pastrami meatball sausage. Burgdoggen pig kevin, turkey meatloaf
              beef ribs biltong ham.Bacon ipsum dolor amet shankle venison pork loin
              prosciutto, tail ham hock turducken pastrami meatball sausage. Burgdoggen
              pig kevin, turkey meatloaf beef ribs biltong ham.
            </Typography>
          </TypographyContainer>
          <TypographyContainer>
            <Typography variant="subtitle2">
              Bacon ipsum dolor amet shankle venison pork loin prosciutto, tail ham hock
              turducken pastrami meatball sausage. Burgdoggen pig kevin, turkey meatloaf
              beef ribs biltong ham.Bacon ipsum dolor amet shankle venison pork loin
              prosciutto, tail ham hock turducken pastrami meatball sausage. Burgdoggen
              pig kevin, turkey meatloaf beef ribs biltong ham.
            </Typography>
          </TypographyContainer>
          <PriceContainer>
            <Typography variant="subtitle2">R$</Typography>
            <Typography variant="h4">40,00</Typography>
            <StyledButton>
              <Typography variant="subtitle2">Habilitar</Typography>
            </StyledButton>
          </PriceContainer>
        </WrapContainer>
      </ContentContainer>
    </Container>
  );
};

export default Details;
