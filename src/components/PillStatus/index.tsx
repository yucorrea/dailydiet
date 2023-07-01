import { Container, Title, Status, PillStatusStyledProps } from "./styles";

type Props = PillStatusStyledProps

export function PillStatus({ onDiet, ...rest }: Props) {

  return (
    <Container {...rest} >
      <Status onDiet={onDiet} />
      <Title>{onDiet ? 'dentro da dieta' : 'fora da dieta'}</Title>
    </Container>
  );
}