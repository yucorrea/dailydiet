import styled from 'styled-components/native';

export const ModalContainer = styled.Modal``;


export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.5);

  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Content = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;


export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  text-align: center;
  margin-bottom: 32px;

`;


export const GridRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;


export const Column = styled.View`
  flex: 1;
`;
