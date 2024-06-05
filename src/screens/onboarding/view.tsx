import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Background } from '../../assets/images';
import { useOnboardingViewModel } from './viewModel';

export function OnboardingView() {
  const { handleHomeScreen } = useOnboardingViewModel();

  return (
    <ImageBackground style={s.container} source={Background}>
      <Text style={s.text}>Saiba de tudo o que se passa no mundo de StarWars</Text>
      <TouchableOpacity onPress={handleHomeScreen} style={s.containerBtn}>
        <Text style={s.textBtn}>Explorar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000000',
    paddingHorizontal: scale(16),
    paddingVertical: scale(32),
  },
  text: {
    color: '#ffffff',
    fontSize: scale(32),
    fontWeight: 'bold',
    marginBottom: scale(16),
  },
  containerBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    borderRadius: scale(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#000000',
    fontSize: scale(14),
    fontWeight: '600',
  },
});
