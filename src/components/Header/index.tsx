import { useTheme } from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from "@components/ButtonIcon";

import { Container, HeaderStyleProps, Title, } from "./styles";

type Props = HeaderStyleProps & {
  title: string;
}

export function Header({ title, ...rest }: Props) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return (
    <Container {...rest}>
      <ButtonIcon onPress={handleGoBack} color={COLORS.GRAY_200} />

      <Title>{title}</Title>
    </Container>
  );
}