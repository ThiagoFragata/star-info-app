import { useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { usePeopleViewModel } from '../../screens/people/viewModel';
import { TitleAndDescription } from '../atoms/title-and-description';

export function ListUsers() {
  const { error, handleNextPage, isPending, users, page, mutate, onRefresh } = usePeopleViewModel();
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
        <Text>Error fetching data</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
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
            <TitleAndDescription title={'Altura'} description={item.height} />
            <TitleAndDescription title={'Peso'} description={item.mass} />
            <TitleAndDescription title={'Ano de nascimento'} description={item.birth_year} />
            <TitleAndDescription title={'Cor do cabelo'} description={item.hair_color} />
            <TitleAndDescription title={'Cor dos olhos'} description={item.eye_color} />
            <TitleAndDescription title={'Gênero'} description={item.gender} />
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
