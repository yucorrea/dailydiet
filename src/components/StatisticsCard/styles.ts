import styled, { css } from 'styled-components/native';

export type StatiticsCardStyleProps = {
  backgroundColor?: string
};

export const Container = styled.View <StatiticsCardStyleProps>`
  width: 100%;
  height: 107px;

  padding: 16px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  ${({ theme, backgroundColor }) => css`
    background-color: ${backgroundColor ? backgroundColor : theme.COLORS.GRAY_600};
  `}

  margin-bottom: 12px;
`;

export const Title = styled.Text<StatiticsCardStyleProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  text-align: center;
`;





