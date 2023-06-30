import styled from 'styled-components/native';

export type HighlightStyleProps = {
  fontSizeTitle?: 'large' | 'small'
};

export const Container = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const Title = styled.Text<HighlightStyleProps>`
  font-size: ${({ theme, fontSizeTitle }) => fontSizeTitle === 'large' ? theme.FONT_SIZE.XL : theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 6px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;





