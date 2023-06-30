import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Hour, MealTitle, Status, StatusStyledProps } from "./styles";

type Props = TouchableOpacityProps & StatusStyledProps & {
  title: string;
  hour: string;
}

export function MealItemCard({ title, hour, status, ...rest }: Props) {

  return (
    <Container {...rest} >
      <Hour>{hour}</Hour>

      <Divider />

      <MealTitle>{title}</MealTitle>
      <Status status={status} />
    </Container>
  );
}