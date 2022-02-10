import {View} from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';
import {useEffect, useState} from "react";
import PeopleList from "./src/components/PeopleList";

const App = (props) => {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?nat=br&results=5').then(response => {
      const {results} = response.data;
      setPeoples(results);
    });
  }, []);

  return (
    <View>
      <Header title="Peoples!"/>
      <PeopleList peoples={peoples}/>
    </View>
  );
}

export default App;
