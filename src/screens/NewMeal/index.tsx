import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Meal } from '@storage/meal/types/MealDTO';
import { mealCreate } from '@storage/meal/mealCreate';
import { mealUpdate } from '@storage/meal/mealUpdate';

import { Header } from '@components/Header';
import { Input, } from "@components/Input";
import { CheckButton } from '@components/CheckButton';
import { Button } from "@components/Button";
import { InputMask } from '@components/InputMask';

import { Container, Content, Title, Column, GridRow, Footer, } from "./styles";
import { AppError } from '@utils/AppError';

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [onDiet, setOnDiet] = useState<boolean | null>(null);


  const navigation = useNavigation();
  const params = useRoute().params as Meal

  function validate({ name, description, date, hour, onDiet }: Omit<Meal, 'id' | 'onDiet'> & { onDiet: boolean | null }) {
    if (
      name.length === 0 ||
      description.length === 0 ||
      date.length === 0 ||
      hour.length === 0 ||
      onDiet === null
    ) {
      return false;
    }

    return true;
  }

  async function handleAddMeal() {
    try {
      const data = { name, description, date, hour, onDiet }

      const isValid = validate(data);

      if (!isValid) {
        throw new AppError(
          `Erro ao ${params ? "editar" : "cadastrar"} refeição. Verifique os campos e tente novamente.`
        )
      }


      if (onDiet !== null) {
        params?.id ? await mealUpdate(params.id, { id: params.id, ...data, onDiet }) : await mealCreate({ ...data, onDiet })
        navigation.navigate('feedback', { onDiet })
      }

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(
          params ? 'Editar refeição' : 'Nova refeição',
          error.message
        )
      }

      console.log(error);
    }
  }


  useEffect(() => {
    if (params) {
      setName(params.name);
      setDescription(params.description);
      setDate(params.date)
      setHour(params.hour)
      setOnDiet(params.onDiet)
    }
  }, [params]);

  return (
    <Container>
      <Header title={params ? "Editar refeição" : "Nova refeição"} />

      <Content contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        <Input
          value={name}
          onChangeText={setName}
          label="Nome"
          returnKeyType='next'
        />

        <Input
          value={description}
          onChangeText={setDescription}
          label="Descrição"
          multiline
          style={{ height: 120, textAlignVertical: 'top' }}
          numberOfLines={20}
          returnKeyType='next'
        />


        <GridRow>
          <Column>
            <InputMask
              type='datetime'
              options={{ format: 'DD/MM/YYYY' }}
              value={date}
              onChangeText={setDate}
              label="Data"
              keyboardType="number-pad"
              returnKeyType='next'
            />
          </Column>

          <Column>
            <InputMask
              type='datetime'
              options={{ format: 'HH:mm' }}
              value={hour}
              onChangeText={setHour}
              label="Hora"
              keyboardType="number-pad"
              returnKeyType='next'
            />
          </Column>
        </GridRow>


        <Title>Está dentro da dieta?</Title>
        <GridRow>
          <Column>
            <CheckButton
              title='Sim'
              type={true}
              selected={onDiet}
              onPress={() => setOnDiet(true)}
            />
          </Column>

          <Column>
            <CheckButton
              title='Não'
              type={false}
              selected={onDiet}
              onPress={() => setOnDiet(false)}
            />
          </Column>

        </GridRow>

        <Footer>
          <Button
            title={params ? "Salvar alterações" : "Cadastrar refeição"}
            style={{ marginTop: 32 }}
            onPress={handleAddMeal}
          />
        </Footer>
      </Content>


    </Container>
  );
}