import { View } from 'react-native';
import { ListPlanets } from '../../components/organisms/list-planets';

export function PlanetsView() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fffafa' }}>
      <ListPlanets />
    </View>
  );
}
