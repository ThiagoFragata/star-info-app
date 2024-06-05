import { View } from 'react-native';
import { ListStarships } from '../../components/organisms/list-startships';

export function StarshipsView() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fffafa' }}>
      <ListStarships />
    </View>
  );
}
