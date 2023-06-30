import { Container, Title, Description, HighlightStyleProps } from "./styles";

type Props = HighlightStyleProps & {
  title: string;
  description: string;
}

export function Highlight({ title, description, fontSizeTitle = 'large', ...rest }: Props) {

  return (
    <Container {...rest}>
      <Title fontSizeTitle={fontSizeTitle}>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}