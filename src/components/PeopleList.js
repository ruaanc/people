import React from "react";
import {View, StyleSheet} from "react-native";
import PeopleListItems from "./PeopleListItems";

const PeopleList = props => {
    const {peoples} = props;
    const textElements = peoples.map(people => {
        return (
            <PeopleListItems key={people.name.first} people={people} />
        );
    });
    return (
        <View style={styles.container}>
            {textElements}
        </View>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;
