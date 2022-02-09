import {Text, View} from 'react-native';
import Header from './src/components/Header';

export default function App() {

  const renderList = () => {
    const names = [
      'Eddie Van Halen',
      'Jimi Hendrix',
      'Chimbinha',
      'Steve Vai'
    ];

    return names.map((name, index) => {
      return <Text key={index}>{name}</Text>
    });
  };

  return (
    <View>
      <Header title="Pessoas!"/>
      {renderList()}
    </View>
  );
}
