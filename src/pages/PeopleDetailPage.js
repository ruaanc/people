import {View, Text, Image, StyleSheet} from 'react-native';
import Line from "../components/Line";

const PeopleDetailPage = (props) => {
    const { navigation } = props;
    const { people } = navigation.state.params;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: people.picture.large}}
                style={styles.avatar}
            />
            <View style={styles.detailContainer}>
                <Line label="Email:" content={ people.email }/>
                <Line label="City:" content={ people.location.city }/>
                <Line label="Country:" content={ people.location.state }/>
                <Line label="Telephone:" content={ people.phone }/>
                <Line label="Cell:" content={ people.cell }/>
                <Line label="Nationality:" content={ people.nat }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        borderRadius: 200
    },
    container: {
        padding: 15
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
});

export default PeopleDetailPage;
