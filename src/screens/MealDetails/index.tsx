import { Header } from '@components/Header';
import { Button } from "@components/Button";
import { Highlight } from '@components/Hightlight';
import { useTheme } from 'styled-components/native';
import { PillStatus } from '@components/PillStatus';

import { Container, Content, Footer, } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function MealDetails() {
  const { COLORS } = useTheme();

  const status = 'in'

  const navigation = useNavigation();

  function handleDeleteMeal() {
    navigation.navigate('feedback', { status: 'out' });
  }


  function handleEditMeal() {
    navigation.navigate('meal');
  }

  return (
    <Container>
      <Header title="Refeição" backgroundColor={status === 'in' ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT} />

      <Content contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >

        <Highlight
          title='X-tudo'
          description='Xis completo da lancheria do bairro'
        />

        <Highlight
          title='Data e hora'
          description='12/08/2022 às 20:00'
          fontSizeTitle='small'
        />

        <PillStatus status='in' style={{ marginTop: 24 }} />
        <Footer>

          <Button
            title="Editar refeição"
            icon='edit'
            onPress={handleEditMeal}
          />
          <Button
            title="Excluir refeição"
            type='outline'
            icon='trash'
            style={{ marginTop: 12 }}
            onPress={handleDeleteMeal}
          />
        </Footer>
      </Content>


    </Container>
  );
}