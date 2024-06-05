import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootParamsScreens } from '../../navigations/public.route';

export function useOnboardingViewModel() {
  const { navigate } = useNavigation<NavigationProp<RootParamsScreens>>();

  function handleHomeScreen() {
    navigate('home');
  }
  return { handleHomeScreen };
}
