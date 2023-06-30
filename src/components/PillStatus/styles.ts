import { ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';
export type PillStatusStyledProps = ViewProps & {
  status: string;
}

export const Container = styled.View`
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 1000px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background:  ${({ theme }) => theme.COLORS.GRAY_600};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;


export const Status = styled.View<PillStatusStyledProps>`
  width: 8px;
  height: 8px;
  border-radius: 7px;
  margin-right: 8px;

  ${({ theme, status }) => css`
    background-color: ${status === 'out' ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
  `}
`;


