import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  min-height: ${({ theme }) => theme.spacing(10)}px;
  margin-top: ${({ theme }) => theme.spacing(5)}px;
`;

export const StyledCategoryButton = styled(Button)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? props.theme.palette.common.white : 'grey')};
  width: ${({ theme }) => theme.spacing(20)}px;
  min-height: ${({ theme }) => theme.spacing(10)}px;
  border-radius: ${({ theme }) => theme.spacing(0)}px;
  background-color: ${(props) =>
    props.active ? props.theme.palette.warning.dark : '#f0f0f0'};

  .MuiButton-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .material-icons {
    color: ${(props) => (props.active ? props.theme.palette.common.white : 'grey')};
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.warning.dark};
    color: white;

    span {
      color: white;
    }
  }
`;

export const StyledIcon = styled(Icon)`
  color: gray;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;

  :hover {
    color: white;
  }
`;
