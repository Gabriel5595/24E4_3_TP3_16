import { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Button, Text } from 'react-native';
import NewsList from './components/newsList/index.jsx';
import SearchBar from './components/searchBar/index.jsx';
import DateRangePicker from './components/dateRangePicker/index.jsx';

const API_URL = 'https://servicodados.ibge.gov.br/api/noticias';

const App = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('titulo');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      let url = `${API_URL}?pagina=1`;
      if (startDate && endDate) {
        url += `&data_inicio=${startDate}&data_fim=${endDate}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchNews().finally(() => setRefreshing(false));
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const filterNews = () => {
    return news
      .filter(item => item.titulo.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'titulo') {
          return a.titulo.localeCompare(b.titulo);
        } else if (sortBy === 'data') {
          return new Date(a.data_publicacao) - new Date(b.data_publicacao);
        } else if (sortBy === 'editorial') {
          return a.editorial.localeCompare(b.editorial);
        }
      });
  };

  useEffect(() => {
    fetchNews();
  }, [startDate, endDate]);

  return (
    <ScrollView style={{ padding: 20 }}>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Button title="Ordenar por Título" onPress={() => handleSort('titulo')} />
        <Button title="Ordenar por Data" onPress={() => handleSort('data')} />
        <Button title="Ordenar por Editorial" onPress={() => handleSort('editorial')} />
      </View>
      <DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} />
      <NewsList news={filterNews()} isLoading={isLoading} onRefresh={onRefresh} refreshing={refreshing} />
    </ScrollView>
  );
};

export default App;
