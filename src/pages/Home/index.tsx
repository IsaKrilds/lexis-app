import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { CardContainer, Container } from './styles';
import CarouselItem from '../../components/CarouselItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bkg1 from '../../assets/images/bkg-dark-1.png';
import bkg2 from '../../assets/images/bkg-dark-2.png';
import CardItem from '../../components/CardItem';
import { CardData } from './utils';
import CategoryBar from '../../components/CategoryBar';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [data, setData] = useState(CardData);

  const onClick = (name: string) => {
    setActiveCategory(name);
  };

  useEffect(() => {
    if (activeCategory === 'Todos') {
      setData(CardData);
    } else {
      const newData = CardData.filter((item) => {
        return item.title === activeCategory;
      });

      setData(newData);
    }
  }, [activeCategory]);

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
      <CategoryBar onClick={onClick} />
      <CardContainer>
        {data.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </CardContainer>
    </Container>
  );
};

export default Home;
