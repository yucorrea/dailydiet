import styled from 'styled-components/native';

export type HeaderStyleProps = {
  backgroundColor?: string;
}

export const Container = styled.View<HeaderStyleProps>`
  width: 100%;
  height: 200px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.COLORS.GRAY_500};
  justify-content: center;
  padding: 24px;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;


export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;




