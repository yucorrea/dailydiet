import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export type PercentageStyleProps = {
  percentage: number;
};

export const Container = styled(TouchableOpacity) <PercentageStyleProps>`
  width: 100%;
  height: 102px;
  max-height: 102px;


  ${({ theme, percentage }) => css`
    background-color: ${percentage > 50
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}

  padding: 20px 16px;
  border-radius: 8px;

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


export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;




