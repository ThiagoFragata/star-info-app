import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { scale } from 'react-native-size-matters';
import { Orbit, Plane, Users } from '../assets/icons';
import { OnboardingView } from '../screens/onboarding/view';
import { PeopleView } from '../screens/people/view';
import { PlanetsView } from '../screens/planets/view';
import { StarshipsView } from '../screens/starships/view';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export interface RootParamsScreens {
  // stacks
  onboarding: undefined;
  home: undefined;
  //tabs-bottom
  people: undefined;
  planets: undefined;
  starship: undefined;
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        tabBarStyle: {
          height: scale(64),
          paddingBottom: scale(8),
        },
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
        <Stack.Screen name="onboarding" component={OnboardingView} />
        <Stack.Screen name="home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
