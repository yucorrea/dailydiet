import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type HighlightStyleProps = {
  onDiet: boolean;
};


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const FeedbackHighlight = styled.View`
  width: 100%;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`;


export const Title = styled.Text<HighlightStyleProps>`
  font-size: ${({ theme, }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  text-align: center;
`;

export const Logo = styled.Image`
  margin: 32px 0;
`;





