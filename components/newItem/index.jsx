import { View, Text } from 'react-native';

const NewsItem = ({ item }) => (
  <View style={{ padding: 10, borderBottomWidth: 1 }}>
    <Text style={{ fontWeight: 'bold' }}>{item.titulo}</Text>
    <Text>{item.editorial}</Text>
    <Text>{new Date(item.data_publicacao).toLocaleDateString()}</Text>
  </View>
);

export default NewsItem;