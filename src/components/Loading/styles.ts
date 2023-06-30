import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  justify-content: center;
  align-items: center;
`;


export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 32
}))``;