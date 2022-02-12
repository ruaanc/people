import {View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";
import PeopleList from "../components/PeopleList";

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
            <PeopleList peoples={peoples}/>
        </View>
    );
}

export default App;
