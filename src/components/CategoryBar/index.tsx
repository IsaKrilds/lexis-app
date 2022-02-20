import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Container, StyledCategoryButton, StyledIcon, Test } from './styles';
import { Categories } from './utils';

interface ButtonProps {
  onClick: (name: string) => void;
}

const CategoryBar: React.FC<ButtonProps> = ({ onClick }) => {
  const [isActive, setIsActive] = useState('Todos');

  const handleActiveButton = (name: string) => {
    onClick(name);
    setIsActive(name);

    return name;
  };

  return (
    <Container>
      {Categories.map((item) => {
        return (
          <StyledCategoryButton
            active={isActive === item.name}
            key={item.id}
            onClick={() => handleActiveButton(item.name)}>
            <StyledIcon>{item.icon}</StyledIcon>
            <Typography variant="caption">{item.name}</Typography>
          </StyledCategoryButton>
        );
      })}
    </Container>
  );
};

export default CategoryBar;
