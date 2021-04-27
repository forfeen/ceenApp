import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image} from 'react-native';
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
        <View style={styles.page}>
            {/* <Text style={styles.header}>สถานการณ์โควิดวันนี้</Text>
            <View style={styles.status}>
                <Text padding>status</Text>
            </View> */}
            <Text style={styles.header}>วัคซีนทั้งหมด</Text>
                <FlatList 
                    data={state}
                    keyExtractor={(vaccine) => vaccine.name}
                    renderItem={( {item} ) => {
                        return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {name: item.name})}>
                            <View style={{alignItems: 'center'}}>
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Image source={require('../../assets/icon/right.png')}
                                    style={{height: 13, width: 8}}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        );
                    }}/>
            </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F0F7F9'
    },
    header:{
        // fontFamily:'Inter-SemiBold',
        fontSize:18,
        paddingTop: 20,
        paddingBottom: 12,
        paddingHorizontal: 50

    },
    status: {
        width: 134,
        height: 168,
        left: 35,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.14,
        shadowRadius: 15,  
        elevation: 3,
    },
    graph: {
        width: 134,
        height: 168,
        left: 35,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.14,
        shadowRadius: 15,  
        elevation: 3
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 309,
        height: 79,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 24,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.14,
        shadowRadius: 15,  
        elevation: 3
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;