export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics?: {
        totalRegistred: number;
        totalOnDiet: number;
        totalNotDiet: number;
        percentOnDiet: number;
        bestSequencyOnDiet: number;
      };
      newMeal?: {
        name: string;
        description: string;
        date: string;
        hour: string;
        onDiet: boolean;
      };
      mealDetails: {
        id: string;
        name: string;
        description: string;
        date: string;
        hour: string;
        onDiet: boolean;
      };
      feedback: {
        onDiet: boolean;
      }
    }
  }
}