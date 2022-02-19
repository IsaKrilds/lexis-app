import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const CenteredFlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Container = styled(CenteredFlexDiv)`
  width: ${({ theme }) => theme.spacing(40)}px;
  height: ${({ theme }) => theme.spacing(40)}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0px 0px 16px #888888;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(6)}px ${({ theme }) => theme.spacing(4)}px;
`;

export const CardHeader = styled(CenteredFlexDiv)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(15)}px;
  flex-direction: column;
  align-items: center;
`;

export const CardContent = styled.div`
  width: 80%;
  height: ${({ theme }) => theme.spacing(20)}px;
  flex-direction: column;
  align-items: center;
`;

export const CardButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.warning.main},
    ${({ theme }) => theme.palette.warning.dark}
  );
  width: 100%;
  height: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 0 0 ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(1)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.common.white};
  padding: 0 ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.warning.dark};
  font-size: ${({ theme }) => theme.spacing(4)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;
