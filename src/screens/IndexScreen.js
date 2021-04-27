import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/VaccineContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, getVaccines } = useContext(Context);

    useEffect(() => {
        getVaccines();
        
        const listener = navigation.addListener('didFocus', () =>{
            getVaccines();
        });

        return () => {
            listener.remove();
        };
        
    }, []);

    return(
        <View>
                <FlatList 
                    data={state}
                    keyExtractor={(vaccine) => vaccine.name}
                    renderItem={( {item} ) => {
                        return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {name: item.name})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                        );
                    }}/>
            </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;