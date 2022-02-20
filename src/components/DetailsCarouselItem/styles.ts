import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  min-height: ${({ theme }) => theme.spacing(40)}px;
  color: ${({ theme }) => theme.palette.warning.light};

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
