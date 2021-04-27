import React, {useContext} from 'react';
import {Context} from '../context/VaccineContext';
import {View, Text, StyleSheet, } from 'react-native';

const DetailScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const vaccine = state.find((vaccine) => vaccine.name===navigation.getParam('name'));

    return(
    <View>
        <Text>{vaccine.name}</Text>
        <Text>{vaccine.description}</Text>
    </View>);
};


const styles = StyleSheet.create({});
export default DetailScreen;