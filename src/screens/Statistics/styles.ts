import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-top: -20px;
`;


export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin: 24px 0;

  text-align: center;
`;

export const GridRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;


export const Column = styled.View`
  flex: 1;
`;