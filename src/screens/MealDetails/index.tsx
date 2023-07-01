import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Meal } from '@storage/meal/types/MealDTO';

import { Header } from '@components/Header';
import { Button } from "@components/Button";
import { Highlight } from '@components/Hightlight';
import { useTheme } from 'styled-components/native';
import { PillStatus } from '@components/PillStatus';

import { Container, Content, Footer } from "./styles";
import { Modal } from '@components/Modal';
import { mealDelete } from '@storage/meal/mealDelete';
import { AppError } from '@utils/AppError';

export function MealDetails() {
  const [modalDelete, setModalDelete] = useState(false);
  const { COLORS } = useTheme();

  const navigation = useNavigation();
  const params = useRoute().params as Meal;

  const { onDiet, date, hour, name, description } = params;

  async function handleDeleteMeal() {
    try {
      setModalDelete(false);

      if (params.id) {
        await mealDelete(params.id);

        navigation.navigate('home');
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message);
      }

      console.log(error)
    }
  }


  function handleEditMeal() {
    navigation.navigate('newMeal', params);
  }

  return (
    <Container>
      <Header title="Refeição" backgroundColor={onDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT} />

      <Content contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >

        <Highlight
          title={name}
          description={description}
        />

        <Highlight
          title='Data e hora'
          description={`${date.replaceAll(".", "/")} às ${hour}`}
          fontSizeTitle='small'
        />

        <PillStatus onDiet={onDiet} style={{ marginTop: 24 }} />
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
            onPress={() => setModalDelete(true)}
          />
        </Footer>
      </Content>


      <Modal
        visible={modalDelete}
        title='Deseja realmente excluir o registro da refeição?'
        transparent
        statusBarTranslucent
        onCancelText='Cancelar'
        onConfirmText='Sim, excluir'
        onConfirm={handleDeleteMeal}
        onCancel={() => setModalDelete(false)}
        animationType='fade'
      />

    </Container>
  );
}