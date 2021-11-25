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
const db = SQLite.openDatabase("db.db");

export default function Novo({navigation})
{

    const [image, setImage] = useState(null);
    const [nome, setNome] = useState(null);
    const [descricao, setDescicao] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

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

      let NovoProduto = () => {

        console.log(nome, descricao, img);
    
        if (!nome) {
          alert('informe o nome do produto');
          return;
        }
        if (!descricao) {
          alert('informe a descrição do produto');
          return;
        }
        if (!img) {
          alert('adicione a imagem do produto');
          return;
        }
        
        db.transaction(function (tx) {
          tx.executeSql(
            'INSERT INTO table_user (nome, descricao) VALUES (?,?)',
            [userName, userContact, userAddress],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Produto cadastrado com sucesso!',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('Produtos'),
                    },
                  ],
                  {cancelable: false},
                );
              } else alert('Erro ao cadastrar produto');
            },
          );
        });
      };
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return(

        <View style={stylesss.container}>
            <TextInput
                placeholder={'Nome'}
                style={stylesss.input}
            />

            <TextInput
                placeholder={'Descrição'}
                style={stylesss.textarea}
                numberOfLines={10}
                multiline={true}
            />
            
            <Button style={{}} title="Click e adicione a imagem" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


            <TouchableOpacity 
                    title="Login"
                    style={styles.ButtonLogin}
                    onPress={() => NovoProduto()} 
                    >
                    <Text style={styles.textbuttonLogin}>Login</Text>
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
      borderWidth: 1,        (t, error) => { console.log("db error insertUser"); console.log(error);},

      borderColor: '#ccc',
      padding: 10,
      marginVertical: 5,
    },

  });