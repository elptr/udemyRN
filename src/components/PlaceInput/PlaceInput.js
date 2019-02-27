import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: '',
    }

    placeNameOnChangeHandler = val => {
        this.setState({placeName:val})
    }

    placeSubmitHandler = () => {
        if( this.state.placeName.trim() === 0 ){
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }
    render () {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='An awesome place'
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameOnChangeHandler}/>
                <Button
                    style={styles.placeButton}
                    title="Add"
                    onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    inputContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    placeInput:{
        width:'70%',
        borderWidth:1,
        borderColor:'black',
    },
    placeButton:{
        width:'30%',
    },
});

export default PlaceInput;