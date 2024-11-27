import { FlatList, View, Text, RefreshControl } from 'react-native';
import NewsItem from '../newItem/index.jsx';

const NewsList = ({ news, isLoading, onRefresh, refreshing }) => {
  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <FlatList
      data={news}
      renderItem={({ item }) => <NewsItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => {}} // Adicione lógica de carregamento tardio aqui
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default NewsList;
