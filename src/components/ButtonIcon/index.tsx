import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { Icon } from "./styles";
import { IconProps } from 'phosphor-react-native';

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