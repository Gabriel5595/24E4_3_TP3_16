import { View, TextInput, Text } from 'react-native';

const DateRangePicker = ({ setStartDate, setEndDate }) => (
  <View>
    <Text>Selecione o Período:</Text>
    <TextInput
      placeholder="Data Início (YYYY-MM-DD)"
      onChangeText={setStartDate}
      style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
    />
    <TextInput
      placeholder="Data Fim (YYYY-MM-DD)"
      onChangeText={setEndDate}
      style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
    />
  </View>
);

export default DateRangePicker;
