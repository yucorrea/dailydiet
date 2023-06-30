import { useState } from 'react';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '@assets/images/logo.png';

import { PercentCard } from "@components/PercertCard";
import { Button } from "@components/Button";
import { MealItemCard } from "@components/MealtemCard";

import { Container, HeaderProfile, Logo, MealTitle, ProfileImage, SectionTitle } from "./styles";

export function Home() {

  const [meals, setMeals] = useState([
    {
      title: '28.06.2023',
      data: [
        { name: 'X-tudo', hour: '20:00', status: 'out' },
        { name: 'Sanduíche', hour: '16:00', status: 'in' },
        { name: 'Lasanha de frango com queijo', hour: '12:30', status: 'out' }
      ]
    },
    {
      title: '27.06.2023',
      data: [
        { name: 'X-tudo', hour: '20:00', status: 'out' }
      ]
    }
  ]);

  const navigation = useNavigation();

  function handleAddMeal() {
    navigation.navigate('meal')
  }

  function handleShowStatistics() {
    navigation.navigate('statistics')
  }



  function handleMealDetais() {
    navigation.navigate('mealDetails')
  }

  return (
    <Container>
      <HeaderProfile>
        <Logo source={logo} />

        <ProfileImage
          source={{ uri: 'https://avatars.githubusercontent.com/u/42451078?v=4' }}
        />
      </HeaderProfile>


      <PercentCard
        percentage={90.86}
        onPress={handleShowStatistics}
      />

      <MealTitle>Refeições</MealTitle>

      <Button title="Nova refeição" onPress={handleAddMeal} icon="plus" />

      <SectionList
        sections={meals}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <MealItemCard title={item.name} hour={item.hour} status={item.status} onPress={handleMealDetais} />
        )}
        renderSectionHeader={({ section }) => (
          <SectionTitle>{section.title}</SectionTitle>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}