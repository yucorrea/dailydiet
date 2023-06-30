import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-top: -20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 8px;
`;

export const Footer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`


