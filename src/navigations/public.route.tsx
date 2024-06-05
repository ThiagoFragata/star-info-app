import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orbit, Plane, Users } from '../assets/icons';
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
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
      }}>
      <Tab.Screen
        name="people"
        component={PeopleView}
        options={{
          title: 'Personagens',
          tabBarIcon: ({ color }) => <Users color={color} />,
        }}
      />
      <Tab.Screen
        name="planets"
        component={PlanetsView}
        options={{
          title: 'Planetas',
          tabBarIcon: ({ color }) => <Orbit color={color} />,
        }}
      />
      <Tab.Screen
        name="starship"
        component={StarshipsView}
        options={{
          title: 'Naves espaciais',
          tabBarIcon: ({ color }) => <Plane color={color} />,
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
