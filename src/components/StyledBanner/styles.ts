import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(40)}px;
  background-color: gray;
  border-bottom: 4px solid orange;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing(10)}px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const StyledButton = styled(Button)`
  background-color: orange;
  width: ${({ theme }) => theme.spacing(15)}px;

  :hover {
    background-color: #cd8501;
  }
`;
