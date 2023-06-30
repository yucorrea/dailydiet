import { TouchableOpacityProps } from "react-native";
import { Container, Title, SubTitle, Icon, PercentageStyleProps } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & PercentageStyleProps

export function PercentCard({ percentage, ...rest }: Props) {
  const { COLORS } = useTheme();

  const percentageFormated = percentage.toString().replace(".", ",");


  return (
    <Container
      percentage={percentage}
      {...rest}
    >

      <Icon color={percentage > 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK} />

      <Title>{`${percentageFormated}%`}</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>

    </Container>
  );
}