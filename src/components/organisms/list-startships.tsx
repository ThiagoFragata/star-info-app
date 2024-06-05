import { useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { useStarshipsViewModel } from '../../screens/starships/viewModel';
import { TitleAndDescription } from '../atoms/title-and-description';

export function ListStarships() {
  const { error, handleNextPage, isPending, starships, page, mutate, onRefresh } =
    useStarshipsViewModel();
  useEffect(() => {
    if (page >= 1) {
      mutate();
    }
  }, [page]);

  if (isPending && page === 1) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff0000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ops, algo de errado aconteceu!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={starships}
      refreshControl={
        <RefreshControl refreshing={isPending} onRefresh={onRefresh} colors={['#ff0000']} />
      }
      contentContainerStyle={s.contentList}
      onEndReached={handleNextPage}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {isPending && <ActivityIndicator size="large" color="#ff0000" />}
        </View>
      }
      keyExtractor={(item) => `${item.name}+${Date.now()}`}
      renderItem={({ item }) => (
        <View style={s.card}>
          <TitleAndDescription title={'Nome'} description={item.name} />
          <View style={s.flexWrap}>
            <TitleAndDescription title={'Modelo'} description={item.model} />
            <TitleAndDescription title={'Fabricante'} description={item.manufacturer} />
            <TitleAndDescription title={'Classe'} description={item.starship_class} />
            <TitleAndDescription title={'Custo'} description={`${item.cost_in_credits} créditos`} />
            <TitleAndDescription title={'Comprimento'} description={`${item.length} metros`} />
            <TitleAndDescription
              title={'Velocidade máx.'}
              description={`${item.max_atmosphering_speed} km/h`}
            />
            <TitleAndDescription title={'Tripulação'} description={item.crew} />
            <TitleAndDescription title={'Passageiros'} description={item.passengers} />
            <TitleAndDescription
              title={'Capacidade de carga'}
              description={`${item.cargo_capacity} kg`}
            />
            <TitleAndDescription title={'Suprimentos'} description={item.consumables} />
            <TitleAndDescription title={'Hyperdrive rating'} description={item.hyperdrive_rating} />
            <TitleAndDescription title={'MFLT'} description={item.MGLT} />
          </View>
        </View>
      )}
    />
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
  contentList: {
    marginTop: scale(8),
    paddingHorizontal: scale(16),
    gap: scale(16),
  },
});
