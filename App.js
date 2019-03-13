import React from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

import { connect } from 'react-redux';

class App extends React.Component {


    onPlaceAddedHandler = (place) => {
        this.props.onAddPlaces(place);
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlaces();
    }

    onPlaceSelectedHandler = key => {
        this.props.onSelectPlace(key);
    }

    modalClosed = () => {
        this.props.onDeselectPlace();
    }

    render() {

        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onItemClosed={this.modalClosed}
                />
                <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}/>
                <PlaceList
                    places={this.props.places}
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

const mapStateToProps = state => {
    return { //js object where we map keys what we want to access with props to slices of our state
        //get them from global state (configureStore.js),
        // via global state and
        // then the property this slice holds in reducers/places in const initialState

        places: state.places.places,
        selectedPlace:state.places.selectedPlace
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //connect names (keys) by our choice to props that we want to use in App
        onAddPlaces: (name) => dispatch(addPlace(name)), //dispatch an action, use action creators
        onDeletePlaces: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
