import { useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { usePlanetsViewModel } from '../../screens/planets/viewModel';
import { TitleAndDescription } from '../atoms/title-and-description';

export function ListPlanets() {
  const { error, handleNextPage, isPending, planets, page, mutate, onRefresh } =
    usePlanetsViewModel();
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
      data={planets}
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
            <TitleAndDescription title={'Clima'} description={item.climate} />
            <TitleAndDescription title={'Terreno'} description={item.terrain} />
            <TitleAndDescription title={'População'} description={item.population} />
            <TitleAndDescription title={'Gravidade'} description={item.gravity} />
            <TitleAndDescription title={'Diâmetro'} description={`${item.rotation_period}km`} />
            <TitleAndDescription
              title={'Período de rotação'}
              description={`${item.rotation_period} horas`}
            />
            <TitleAndDescription
              title={'Período orbital'}
              description={`${item.orbital_period} dias`}
            />
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
