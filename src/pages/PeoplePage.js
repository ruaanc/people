import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";
import PeopleList from "../components/PeopleList";

const PeoplePage = (props) => {

    const { navigation } = props;

    const [peoples, setPeoples] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://randomuser.me/api/?nat=br&results=15').then(response => {
            const {results} = response.data;
            setPeoples(results);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
            setError(true);
        });
    }, []);

    const renderPage = () => {
        if(loading) {
            return <ActivityIndicator size="large" color="#6ca2f7"/>;
        }

        if(error) {
            return <Text style={styles.error}>Something went wrong...</Text>;
        }

        return <PeopleList
            peoples={peoples}
            onPress={(pageParams) => {
                navigation.navigate('PeopleDetail', pageParams)
            }}
        />;
    };

    return (
        <View style={styles.container}>
            {renderPage()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        alignSelf: 'center',
        fontSize: 20
    }
});

export default PeoplePage;
