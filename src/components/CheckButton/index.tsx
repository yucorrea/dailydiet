import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, Status, CheckButtonStyleProps } from "./styles";

type Props = TouchableOpacityProps & CheckButtonStyleProps & {
  title: string;
}

export function CheckButton({ title, selected, type, ...rest }: Props) {
  return (
    <Container {...rest} type={type} selected={selected}>
      <Status type={type} />
      <ButtonText >{title}</ButtonText>
    </Container>
  );
}