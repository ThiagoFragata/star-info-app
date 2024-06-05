import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { TitleAndDescription } from '../atoms/title-and-description';

export function Card() {
  return (
    <View style={s.card}>
      <TitleAndDescription title={'Nome'} description={'luke'} />
      <View style={s.flexWrap}>
        <TitleAndDescription title={'Altura'} description={'luke'} />
        <TitleAndDescription title={'Peso'} description={'luke'} />
        <TitleAndDescription title={'Ano de nascimento'} description={'luke'} />
        <TitleAndDescription title={'Cor do cabelo'} description={'luke'} />
        <TitleAndDescription title={'Cor dos olhos'} description={'luke'} />
        <TitleAndDescription title={'Gênero'} description={'luke'} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: scale(16),
    backgroundColor: 'white',
    padding: scale(16),
  },
  flexWrap: {
    marginTop: scale(24),
    gap: scale(16),
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
