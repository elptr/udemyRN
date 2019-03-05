import React from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';


export default class App extends React.Component {
    state = {
        places:[],
        selectedPlace:null
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
    onPlaceSelectedHandler = key => {
        this.setState( prevState => {
            return {
                selectedPlace:prevState.places.find( place => {
                    return place.key === key;
                })
            }
        })

    }

    placeDeletedHandler = () => {
        this.setState(prevState => {
                return {
                    places: prevState.places.filter( place => {
                        return place.key !== prevState.selectedPlace.key
                    }),
                    selectedPlace:null
                }
            })
    }

    modalClosed = () => {
        this.setState({
            selectedPlace:null
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onItemClosed={this.modalClosed}
                />
                <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}/>
                <PlaceList
                    places={this.state.places}
                    onPlaceSelected={this.onPlaceSelectedHandler}/>
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
