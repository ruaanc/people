import {View, Text, Image, StyleSheet} from 'react-native';

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
                <View style={styles.line}>
                    <Text style={styles.cellLabel}>Email: </Text>
                    <Text style={styles.cellContent}>{people.email}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1
    },
    container: {
        padding: 15
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingBottom: 3,
        paddingTop: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cellLabel: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    cellContent: {
        fontSize: 18,
        paddingLeft: 5
    },
});

export default PeopleDetailPage;
