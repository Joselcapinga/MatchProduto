import React, {useState} from 'react';
import {
    StyleSheet,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Button, 
    FlatList,
    VirtualizedList,
    StatusBar,
    Image,
} from 'react-native';

import logo from '../assets/icon.png';

import HomeController from '../controller/HomeController';
import styles from '../assets/style';

export default function Home({navigation})
{
    const items = [
        {id: '0', text: 'view'},
        {id: '1', text: 'Text'},
        {id: '2', text: 'Img'},
        {id: '3', text: 'view'}
    ];


    return (

        /*<FlatList
            style={styles.container}
            data={items}
            renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
            keyExtractor={(item) => item.id}
        />*/

        <View style={styles.container}>
             <Text>Home</Text>
        </View>

);}

