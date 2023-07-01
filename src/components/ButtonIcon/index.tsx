import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { IconProps } from 'phosphor-react-native';

import { Icon } from "./styles";

type Props = IconProps & TouchableOpacityProps & {
  onPress: () => void;
}

export function ButtonIcon({ onPress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} >
      <Icon {...rest} />
    </TouchableOpacity>
  );
}