import { useTheme } from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Content, HeaderStyleProps, SubTitle, Title, } from "./styles";

type Props = HeaderStyleProps & {
  percentage: number;
}

export function HeaderPercent({ percentage, backgroundColor, ...rest }: Props) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  const percentageFormated = percentage.toString().replace(".", ",");

  return (
    <Container {...rest} backgroundColor={percentage > 50 ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}>
      <ButtonIcon onPress={handleGoBack} color={percentage > 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK} />

      <Content>
        <Title>{`${percentageFormated}%`}</Title>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </Content>
    </Container>
  );
}