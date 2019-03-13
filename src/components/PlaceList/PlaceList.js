import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {


    return <FlatList
        keyboardShouldPersistTaps='always'
        style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem
                placeName={info.item.name}
                placeImage={info.item.image}
                onItemPressed={() => props.onPlaceSelected(info.item.key)}/>)}
    />


    // return <TouchableOpacity
    //             style={styles.listContainer}
    //             data={props.places}
    //         >
    //     {props.places.map(place => (
    //         <ListItem
    //             placeName={place.name}
    //             placeImage={place.image}
    //             onItemPressed={() => props.onPlaceSelected(place.key)}
    //         />
    //     ))}
    // </TouchableOpacity>
}

const styles = StyleSheet.create({
    listContainer:{
        width:'100%',

    }

});



export default PlaceList;