import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type StatusStyledProps = {
  status: string;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  border-radius: 6px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  margin-bottom: 8px;
`;


export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 8px;
`;


export const MealTitle = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;


export const Status = styled.View<StatusStyledProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  ${({ theme, status }) => css`
    background-color: ${status === 'out' ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
  `}
`;


