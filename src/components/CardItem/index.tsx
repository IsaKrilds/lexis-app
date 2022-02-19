import { Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CardHeader, CardButton, CardContent, StyledIcon } from './styles';

interface CardProps {
  title: string;
  subtitle: string;
  value: string;
  icon: string;
  id: number;
}

const CardItem: React.FC<CardProps> = ({ title, value, subtitle, icon, id }) => {
  const history = useHistory();
  return (
    <Container>
      <CardHeader>
        <StyledIcon>{icon}</StyledIcon>
        <Typography variant="body1">{title}</Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="caption">{subtitle}</Typography>
      </CardContent>
      <CardButton onClick={() => history.push(`/details/${id}`)}>
        <Typography variant="subtitle2">R$ {value}</Typography>
        <Typography variant="subtitle2">Saiba Mais</Typography>
      </CardButton>
    </Container>
  );
};

export default CardItem;
