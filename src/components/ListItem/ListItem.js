import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

});


export default ListItem;