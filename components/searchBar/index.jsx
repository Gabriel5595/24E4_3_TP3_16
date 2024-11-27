import { TextInput } from 'react-native';

const SearchBar = ({ searchTerm, onSearch }) => (
  <TextInput
    placeholder="Buscar por título..."
    value={searchTerm}
    onChangeText={onSearch}
    style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
  />
);

export default SearchBar;
