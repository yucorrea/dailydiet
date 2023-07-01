import { Wrapper, Container, Label } from "./styles";
import { TextInputMaskProps } from "react-native-masked-text";

type Props = TextInputMaskProps & {
  label: string;
}


export function InputMask({ label, ...rest }: Props) {
  return (
    <Wrapper >
      <Label>{label}</Label>

      <Container  {...rest} />
    </Wrapper>
  );
}