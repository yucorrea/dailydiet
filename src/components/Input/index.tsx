import { TextInputProps } from "react-native";
import { Wrapper, Container, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
}


export function Input({ label, ...rest }: Props) {
  return (
    <Wrapper >
      <Label>{label}</Label>

      <Container {...rest} />
    </Wrapper>
  );
}