import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export type ButtonIconStyleProps = {
  type?: string;
}

export const Icon = styled(ArrowLeft).attrs<ButtonIconStyleProps>(({
  size: 24
}))``