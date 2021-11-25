import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Button,
    ActivityIndicator,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import styles from '../../assets/style';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("database.db");

export default function Novo({navigation})
{

    //const [image, setImage] = useState(null);
    const [nome, setNome] = useState(null);
    const [descricao, setDescicao] = useState(null);

      useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT * FROM produtos sqlite_master",
            [],
            function (tx, res) {
              //console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE produtos', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS produtos(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(255), descricao VARCHAR(255))',
                  [],
                );
              }
            },
          );
        });
      }, []);

      const getProdutos = (setUserFunc) => {
        db.transaction(
          tx => {
            tx.executeSql(
              'select * from produtos',
              [],
              (_, { rows: { _array } }) => {
                setUserFunc(_array)
              }
            );
          },
          (t, error) => { console.log("db error load produtos"); console.log(error) },
          (_t, _success) => { console.log("loaded produtos")}
        );
      }

    //console.log(getProdutos)

     function insertProduto(){
      db.transaction( tx => {
          tx.executeSql( 'insert into produtos (nome, descricao) values (?, ?, ?)', [nome, descricao] );
          console.log(nome, descricao)
        },
        (t, error) => { console.log("db error insert produtos"); console.log(error);},
      )
    }

    return(

        <View style={stylesss.container}>
            <TextInput
                placeholder={'Nome'}
                style={stylesss.input}
                onChangeText={nome => setNome(nome)}
            />

            <TextInput
                placeholder={'Descrição'}
                style={stylesss.input}
                onChangeText={descricao => setDescicao(descricao)}
            />
            
            <TouchableOpacity 
                    title="Cadastrar"
                    style={styles.ButtonLogin}
                    onPress={() => insertProduto()} 
                    >
                    <Text style={styles.textbuttonLogin}>Cadastrar</Text>
                </TouchableOpacity>
        </View>

    );
}

const stylesss = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      margin: 15,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 5,
    },
    textarea: {
      height: 150,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 5,
    },

  });