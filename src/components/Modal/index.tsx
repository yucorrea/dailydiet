import { ModalProps } from 'react-native';
import { ModalContainer, Container, Content, Title, GridRow, Column } from "./styles";
import { Button } from '@components/Button';

type Props = ModalProps & {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  onConfirmText: string;
  onCancelText: string;
}

export function Modal({ title, onConfirm, onConfirmText, onCancel, onCancelText, ...rest }: Props) {
  return (
    <ModalContainer {...rest}>
      <Container>

        <Content>
          <Title>{title}</Title>

          <GridRow>
            <Column>
              <Button
                title={onCancelText}
                type='outline'
                onPress={onCancel}
              />
            </Column>
            <Column>
              <Button
                title={onConfirmText}
                onPress={onConfirm}
              />
            </Column>
          </GridRow>

        </Content>

      </Container>

    </ModalContainer>
  )
}