import { View } from 'react-native';
import { ListUsers } from '../../components/organisms/list-users';

export function PeopleView() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fffafa' }}>
      <ListUsers />
    </View>
  );
}
