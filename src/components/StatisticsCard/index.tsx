import { Container, Title, Description, StatiticsCardStyleProps } from "./styles";

type Props = StatiticsCardStyleProps & {
  title: string;
  description: string;
}

export function StatisticsCard({ title, description, backgroundColor, ...rest }: Props) {

  return (
    <Container
      backgroundColor={backgroundColor}
      {...rest}
    >

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}