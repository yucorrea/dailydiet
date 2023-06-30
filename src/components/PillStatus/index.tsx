import { Container, Title, Status, PillStatusStyledProps } from "./styles";

type Props = PillStatusStyledProps

export function PillStatus({ status, ...rest }: Props) {

  return (
    <Container {...rest} >
      <Status status={status} />
      <Title>{status === 'in' ? 'dentro da dieta' : 'fora da dieta'}</Title>
    </Container>
  );
}