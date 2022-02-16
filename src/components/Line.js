import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Line = ({ label = "", content = "-" }) => {
    const { line, cell} = styles;
    return (
        <View style={line}>
            <Text style={[cell, styles.label]}>{ label }</Text>
            <Text style={[cell, styles.content]}>{ content }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingBottom: 3,
        paddingTop: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5
    },
    label: {
        fontWeight: 'bold',
        flex: 2
    },
    content: {
        flex: 5
    }
});

export default Line;
