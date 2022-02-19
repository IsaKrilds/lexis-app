import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container } from './styles';
import CarouselItem from '../../components/CarouselItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bkg1 from '../../assets/images/bkg-dark-1.png';
import bkg2 from '../../assets/images/bkg-dark-2.png';

const Home: React.FC = () => {
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
          theme="dark"
          background={bkg1}
        />
        <CarouselItem
          title="Histórico Empresarial"
          subtitle="O aplicativo Histórico Empresarial permite ao usuário ter aceso a todos os fatos
          e acontecimentos relevantes de uma empresa desde seu ano de fundação"
          value="40,00"
          theme="dark"
          background={bkg2}
        />
      </Carousel>
    </Container>
  );
};

export default Home;
