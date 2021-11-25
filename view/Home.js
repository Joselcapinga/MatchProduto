import React, {useEffect, useState} from 'react';
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
import UserController from '../controller/user/UserController';
import styles from '../assets/style';
import ModelProduto from '../model/Produto_schema';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");


export default function Home({navigation})
{
    const users = new UserController();

    const items = [
        {id: '0', text: 'view'},
        {id: '1', text: 'Text'},
        {id: '2', text: 'Img'},
        {id: '3', text: 'view'}
    ];

    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT * FROM produtos sqlite_master",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS produtos', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS produtos(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(255), descricao VARCHAR(255), img VARCHAR(255))',
                  [],
                );
              }
            },
          );
        });
      }, []);

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

