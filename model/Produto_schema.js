import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db")

export default class Produto_schema {

    constructor(){
        //criando a tabela user
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
        }
}