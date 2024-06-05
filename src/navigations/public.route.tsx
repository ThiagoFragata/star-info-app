import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PeopleView } from '../screens/people/view';
import { PlanetsView } from '../screens/planets/view';
import { StarshipsView } from '../screens/starships/view';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export interface RootParamsScreens {
  people: undefined;
  planets: undefined;
  starship: undefined;
}

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="people"
        component={PeopleView}
        options={{
          title: 'Personagens',
        }}
      />
      <Tab.Screen
        name="planets"
        component={PlanetsView}
        options={{
          title: 'Planetas',
        }}
      />
      <Tab.Screen
        name="starship"
        component={StarshipsView}
        options={{
          title: 'Naves espaciais',
        }}
      />
    </Tab.Navigator>
  );
}

export function PublicRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
