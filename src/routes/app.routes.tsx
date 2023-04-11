import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../screens/homePage/HomePage";
import { GeneralStatistics } from "../screens/GeneralStatistics/GeneralStatistics";
import { CreateNewDiet } from "../screens/CreateNewDiet/CreateNewDiet";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={HomePage} />
      <Screen name="generalStatistics" component={GeneralStatistics} />
      <Screen name="createNewDiet" component={CreateNewDiet} />
    </Navigator>
  );
}
