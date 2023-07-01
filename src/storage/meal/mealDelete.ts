import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealGetAll } from "./mealGetAll";
import { AppError } from "@utils/AppError";


export async function mealDelete(id: string) {

  try {
    const storedMeals = await mealGetAll();

    const mealIndex = storedMeals.findIndex(storeMeal => storeMeal.id === id);

    if (mealIndex < 0) {
      throw new AppError('Refeição não encontrada.')
    }

    const filteredStoreMeals = storedMeals.filter(storedMeal => storedMeal.id !== id);

    const storage = JSON.stringify(filteredStoreMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}