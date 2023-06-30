import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const Logo = styled.Image``;

export const HeaderProfile = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;


export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 40px;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 24px;
  margin-bottom: 8px;
`;