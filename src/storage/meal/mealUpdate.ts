import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { Meal } from "./types/MealDTO";
import { mealGetAll } from "./mealGetAll";
import { AppError } from "@utils/AppError";


export async function mealUpdate(id: string, data: Meal) {

  try {
    const storedMeals = await mealGetAll();
    const storedMealIndex = storedMeals.findIndex(storedMeal => storedMeal.id === id);

    if (storedMealIndex < 0) {
      throw new AppError('Refeição não encontrada.');
    }

    storedMeals[storedMealIndex] = data;
    const storage = JSON.stringify(storedMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}