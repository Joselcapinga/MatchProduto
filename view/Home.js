import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Button, 
    FlatList,
    StyleSheet,
    VirtualizedList,
    StatusBar
} from 'react-native';

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

        <FlatList
            style={styles.container}
            data={items}
            renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
            keyExtractor={(item) => item.id}
        />
);}
/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
  })
  */