import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export type StatusStyleProps = {
  type: 'in' | 'out'
}

export type CheckButtonStyleProps = StatusStyleProps & {
  selected?: string;
}

export const Container = styled.TouchableOpacity<CheckButtonStyleProps>`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  ${({ theme, type, selected }) => type === selected && css`
    background-color: ${selected === 'in' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border: 1px solid ${selected === 'in' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;


export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-left: 12px;
`;

export const Status = styled.View<StatusStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  ${({ theme, type }) => css`
    background-color: ${type === 'in' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;
