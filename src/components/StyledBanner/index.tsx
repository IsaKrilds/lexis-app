import { Typography } from '@material-ui/core';
import React from 'react';
import { BannerContainer, StyledButton } from './styles';

const StyledBanner: React.FC = () => {
  return (
    <BannerContainer>
      <Typography variant="subtitle1">Histórico Empresarial</Typography>
      <Typography variant="subtitle1">
        O aplicativo Histórico Empresarial permite ao usuário ter aceso a todos os fatos e
        acontecimentos relevantes de uma empresa desde seu ano de fundação
      </Typography>
      <Typography variant="subtitle1">R$40,00</Typography>
      <StyledButton>
        <Typography variant="subtitle1">Saiba mais</Typography>
      </StyledButton>
    </BannerContainer>
  );
};

export default StyledBanner;
