import styled from 'styled-components/native';

export type HeaderStyleProps = {
  backgroundColor?: string;
}

export const Container = styled.View<HeaderStyleProps>`
  width: 100%;
  height: 132px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  padding: 24px;

`;

export const Title = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  text-align: center;

`;




