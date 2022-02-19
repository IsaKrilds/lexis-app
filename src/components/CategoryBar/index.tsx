import React from 'react';
import { Typography } from '@material-ui/core';
import { Container, StyledCategoryButton, StyledIcon } from './styles';
import { Categories } from './utils';

const CategoryBar: React.FC = () => {
  return (
    <Container>
      {Categories.map((item) => {
        return (
          <StyledCategoryButton>
            <StyledIcon>{item.icon}</StyledIcon>
            <Typography variant="caption">{item.name}</Typography>
          </StyledCategoryButton>
        );
      })}
    </Container>
  );
};

export default CategoryBar;
