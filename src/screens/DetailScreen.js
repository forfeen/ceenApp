import React, {useContext} from 'react';
import {Context} from '../context/VaccineContext';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';

const DetailScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const vaccine = state.find((vaccine) => vaccine.name===navigation.getParam('name'));

    //mockup data
    const review = [
        { key:1,
            name: 'user1',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '},
        { key:2,
            name: 'user2',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '},

    ];

    return(
    <View style={styles.page}>
        <View style={{alignItems: 'center'}}>
            <View style={styles.info_box}>
                <View style={styles.info_header}>
                    <Text style={{textAlign: 'center', padding: 5}}>ข้อมูล</Text>
                </View>
                <Text> description {vaccine.description}</Text>
                <Text>ชื่อวัคซีน: {vaccine.name}</Text>
                <Text>ผู้พัฒนา: {vaccine.developer}</Text>
                <Text>ประสิทธิภาพ: {vaccine.performance} %</Text>
                <Text>ราคาเฉลี่ยต่อโดส: {vaccine.average_per_dose}</Text>
            </View>
        </View>
        <Text style={styles.header}>รีวิว</Text>
        <FlatList
            data = {review}
            renderItem = {({ item }) => {
                return (
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.review_box}>
                            <Image source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}} 
                            style={styles.user_pic}></Image>
                            <Text style={{paddingLeft: 10, flex: 1, flexWrap: 'wrap'}}>{item.content}</Text>
                        </View>
                    </View>
                );
            }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('/')}>
            <View style={{alignItems: 'center', paddingBottom: 30}}>
                <View style={styles.add_button}>
                    <Text style={{textAlign: 'center', padding: 13, color: 'white'}}>+</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>);
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#CAEAF2'
    },
    header:{
        // fontFamily:'Inter-Medium',
        fontSize:22,
        paddingTop: 20,
        paddingBottom: 12,
        paddingHorizontal: 65

    },
    info_header:{
        width: 131,
        height: 33,
        borderRadius: 15,
        backgroundColor: '#E2FFE9',
        fontSize: 14,
    },
    info_box: {
        justifyContent: 'space-between',
        width: 309,
        height: 272,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 24,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 12,
    },
    review_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 309,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 24,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 12,
    },
    user_pic: {
        width: 45, 
        height: 45, 
        borderRadius: 400/2
    },
    add_button: {
        width: 110,
        height: 44,
        borderRadius: 25,
        backgroundColor: '#2F80ED',
        fontSize: 24,
    }
});
export default DetailScreen;