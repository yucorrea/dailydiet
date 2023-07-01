import { useState, useCallback } from 'react';
import { SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logo from '@assets/images/logo.png';

import { Meal, MealDTO } from '@storage/meal/types/MealDTO';
import { mealGetAll } from '@storage/meal/mealGetAll';

import { PercentCard } from "@components/PercertCard";
import { Button } from "@components/Button";
import { MealItemCard } from "@components/MealtemCard";

import { Container, HeaderProfile, Logo, MealTitle, ProfileImage, SectionTitle } from "./styles";
import { Loading } from '@components/Loading';
import { groupBy } from '@utils/groupBy';
import { factorySectionList } from '@utils/factorySectionList';

export type Statitics = {
  totalRegistred: number;
  totalOnDiet: number;
  totalNotDiet: number;
  percentOnDiet: number;
  bestSequencyOnDiet: number;
}

export function Home() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState<MealDTO[]>([]);
  const [statitics, setStatics] = useState<Statitics>();

  const navigation = useNavigation();

  function handleAddMeal() {
    navigation.navigate('newMeal')
  }

  function handleShowStatistics() {
    navigation.navigate('statistics', statitics)
  }


  function handleMealDetails(meal: Meal) {
    navigation.navigate('mealDetails', meal)
  }


  async function getAllMeals() {
    try {
      setLoading(true);
      const meals = await mealGetAll();

      const totalRegistred = meals.length;
      const totalNotDiet = meals.filter(meal => !meal.onDiet).length;
      const totalOnDiet = meals.filter(meal => meal.onDiet).length;

      let percentOnDiet = totalRegistred > 0 ? (totalOnDiet / totalRegistred) * 100 : 0;

      const bestSequencyOnDiet = (data: Meal[]) => {
        let maxCount = 0;
        let count = 0;

        for (let i = 0; i < data.length; i++) {
          if (data[i].onDiet) {
            count++;
            if (count > maxCount) {
              maxCount = count
            }
          } else {
            count = 0
          }
        }

        return maxCount;
      }

      setStatics({
        totalNotDiet,
        totalOnDiet,
        totalRegistred,
        bestSequencyOnDiet: bestSequencyOnDiet(meals),
        percentOnDiet: Number(percentOnDiet.toFixed(2))
      })

      const groupByDateMeals = groupBy<Meal[]>(meals, 'date');
      const sectionList = factorySectionList<Meal[]>(groupByDateMeals);

      setMeals(sectionList)
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    getAllMeals();
  }, []));


  return (
    <Container>
      <HeaderProfile>
        <Logo source={logo} />

        <ProfileImage
          source={{ uri: 'https://avatars.githubusercontent.com/u/42451078?v=4' }}
        />
      </HeaderProfile>

      <PercentCard
        percentage={statitics?.percentOnDiet ?? 0}
        onPress={handleShowStatistics}
        disabled={loading}
      />

      <MealTitle>Refeições</MealTitle>

      <Button
        title="Nova refeição"
        onPress={handleAddMeal}
        icon="plus"
        disabled={loading}
      />

      {loading ? (
        <Loading />
      ) : (
        <SectionList
          sections={meals}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <MealItemCard
              title={item.name}
              hour={item.hour}
              onDiet={item.onDiet}
              onPress={() => handleMealDetails(item)}
            />
          )}
          renderSectionHeader={({ section }) => (
            <SectionTitle>{section.title.replaceAll("/", ".")}</SectionTitle>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}