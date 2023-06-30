import { useState } from 'react';

import { Header } from '@components/Header';
import { Input, } from "@components/Input";
import { CheckButton } from '@components/CheckButton';
import { Button } from "@components/Button";

import { Container, Content, Title, Column, GridRow, Footer, } from "./styles";
import { useNavigation } from '@react-navigation/native';


export function Meal() {

  const [mealInOut, setMealInOut] = useState('');

  return (
    <Container>
      <Header title="Nova refeição" />

      <Content contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
        <Input label="Nome" />

        <Input
          label="Descrição"
          multiline
          style={{ height: 120, textAlignVertical: 'top' }}
          numberOfLines={20}
        />


        <GridRow>
          <Column>
            <Input label="Data" keyboardType="number-pad" />
          </Column>

          <Column>
            <Input label="Hora" keyboardType="number-pad" />
          </Column>
        </GridRow>


        <Title>Está dentro da dieta?</Title>
        <GridRow>
          <Column>
            <CheckButton
              title='Sim'
              type='in'
              selected={mealInOut}
              onPress={() => setMealInOut('in')}
            />
          </Column>

          <Column>
            <CheckButton
              title='Não'
              type='out'
              selected={mealInOut}
              onPress={() => setMealInOut('out')}
            />
          </Column>

        </GridRow>

        <Footer>
          <Button title="Cadastrar refeição" style={{ marginTop: 32 }} />
        </Footer>
      </Content>


    </Container>
  );
}