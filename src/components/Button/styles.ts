import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export type ButtonStyleProps = {
  type?: 'default' | 'outline'
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  ${({ theme, type }) => type === 'outline' && css`
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_100};
  `}
`;


export const ButtonText = styled.Text<ButtonStyleProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-left: 12px;

  ${({ theme, type }) => type === 'outline' && css`
   color: ${theme.COLORS.GRAY_100};
  `}
`;
