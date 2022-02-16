import React from "react";
import {FlatList, StyleSheet} from "react-native";
import PeopleListItems from "./PeopleListItems";

const PeopleList = props => {
    const { peoples, onPress } = props;
    return (
        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItems
                    people={item}
                    onPress={onPress}
                />)}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;
