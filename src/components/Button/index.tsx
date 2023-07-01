import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as Icon from 'phosphor-react-native';

import { Container, ButtonText, ButtonStyleProps } from "./styles";

type Props = ButtonStyleProps & TouchableOpacityProps & {
  title: string;
  icon?: 'plus' | 'edit' | 'trash'
}

type IconComponentProps = Icon.IconProps & {
  icon?: 'plus' | 'edit' | 'trash'
}

function IconComponent({ icon, ...rest }: IconComponentProps) {
  switch (icon) {
    case 'plus':
      return <Icon.Plus  {...rest} />
    case 'edit':
      return <Icon.NotePencil  {...rest} />
    case 'trash':
      return <Icon.Trash {...rest} />
  }

  return <></>;
}


export function Button({ title, icon, type = 'default', ...rest }: Props) {

  const { COLORS } = useTheme();

  return (
    <Container type={type} {...rest}>
      {icon && (
        <IconComponent icon={icon} color={type === 'outline' ? COLORS.GRAY_100 : COLORS.WHITE} size={24} />
      )}

      <ButtonText type={type}>{title}</ButtonText>
    </Container>
  );
}