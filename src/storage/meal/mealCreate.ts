import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { Meal } from "./types/MealDTO";
import { mealGetAll } from "./mealGetAll";


export async function mealCreate(data: Omit<Meal, 'id'>) {
  try {
    const storedMeals = await mealGetAll();
    const storage = JSON.stringify([...storedMeals, { id: uuid.v4(), ...data }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}