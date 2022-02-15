import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const PeopleListItems = props => {
    const { people, onPress } = props;
    const { name, picture } = people;
    const { title, first, last } = name;
    const { thumbnail } = picture;
    return (
        <TouchableOpacity onPress={() => {
            onPress({ people })
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: thumbnail }}/>
                <Text style={styles.lineText}>
                    {`${title} ${first} ${last}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
});

export default PeopleListItems;
