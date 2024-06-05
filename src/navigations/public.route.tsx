import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../../App';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export interface RootParamsScreens {
  people: undefined;
  planets: undefined;
  starship: undefined;
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="people" component={App} />
      <Tab.Screen name="planets" component={App} />
      <Tab.Screen name="starship" component={App} />
    </Tab.Navigator>
  );
}

export function PublicRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
