export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  onDiet: boolean;
}

export type MealDTO = {
  title: string;
  data: Meal[];
}