import styled from 'styled-components';

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
`;
