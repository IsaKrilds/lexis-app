import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Container, ContentContainer, WrapContainer, TitleContainer } from './styles';
import CarouselItem from '../../components/CarouselItem';
import bkg1 from '../../assets/images/bkg-light-1.png';
import bkg2 from '../../assets/images/bkg-light-2.png';
import { CardData } from '../Home/utils';

const Details: React.FC = () => {
  const [cardData, setCardData] = useState<any>();
  const { id } = useParams<any>();

  useEffect(() => {
    const data = CardData.filter((item) => {
      return item.id === Number(id);
    });

    setCardData(data[0]);
  }, []);

  console.log(cardData);

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
            <Typography>{cardData.title}</Typography>
          </TitleContainer>
        </WrapContainer>
      </ContentContainer>
    </Container>
  );
};

export default Details;
