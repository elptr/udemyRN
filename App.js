import React from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
    state = {
        places:[],
    }


    onPlaceAddedHandler = (place) => {
        this.setState( prevState => {
            return {
                places: prevState.places.concat({
                    key: Math.random(),
                    name:place,
                    image:{
                        uri:'https://www.geekyexplorer.com/wp-content/uploads/2017/04/must-visit-places-siquijor-island-cambuhagay-falls.jpg'
                    }
                    })
            }
        });
    }
    onItemDeleteHandler = (key) => {
        this.setState( prevState => {
            return {
                places: prevState.places.filter((place) =>{
                    return place.key !== key
                } )
            }
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}/>
                <PlaceList
                    places={this.state.places}
                    onItemDelete={this.onItemDeleteHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding:26,
    },

});
