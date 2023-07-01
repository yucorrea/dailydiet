import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 24px;

`;

export const Container = styled(TextInputMask)`
  width: 100%;
  height:  48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 16px;

`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin-bottom: 4px;
`;

