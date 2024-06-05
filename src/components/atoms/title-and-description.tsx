import { StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';

interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

export function TitleAndDescription({ title, description }: TitleAndDescriptionProps) {
  return (
    <View>
      <Text style={s.title}>{title}</Text>
      <Text style={s.description}>{description}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: scale(12),
  },
  description: {
    fontSize: scale(14),
    fontWeight: 'bold',
  },
});
