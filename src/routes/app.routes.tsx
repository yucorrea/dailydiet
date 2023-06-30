import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { MealDetails } from '@screens/MealDetails';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {


  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='meal' component={Meal} />
      <Screen name='mealDetails' component={MealDetails} />
      <Screen name='feedback' component={Feedback} />
    </Navigator>
  )
}