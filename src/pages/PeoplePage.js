import {View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";
import PeopleList from "../components/PeopleList";

const PeoplePage = (props) => {

    const {navigation} = props;

    const [peoples, setPeoples] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://randomuser.me/api/?nat=br&results=15').then(response => {
            const {results} = response.data;
            setPeoples(results);
            setLoading(false);
        });
    }, []);

    return (
        <View>
            { loading ? <ActivityIndicator size="large" color="#6ca2f7"/> : null }
            <PeopleList
                peoples={peoples}
                onPress={(pageParams) => {
                    navigation.navigate('PeopleDetail', pageParams)
                }}
            />
        </View>
    );
}

export default PeoplePage;
