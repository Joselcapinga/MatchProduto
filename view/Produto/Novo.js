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
    SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import {Camera, camera} from 'expo-camera';
import styles from '../../assets/style';
//import MapView from 'react-native-maps';


export default function Novo({navigation})
{
  
  //const [image, setImage] = useState(null);
  const [nome, setNome] = useState(null);
  const [descricao, setDescicao] = useState(null);

  const [image, setImage] = useState(null);
  const [typeCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //quando carregar a tela
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
      /*const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');*/

      //gps
      /*let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);*/

    })();
  }, []);

  /*if(hasPermission === null){
    return <View/>
  }

  if(hasPermission === false){
    return <Text>Acesso negado !</Text>
  }*/
  //gps 
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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

        <View style={style2.container}>
            <TextInput
                placeholder={'Nome'}
                style={style2.input}
                onChangeText={nome => setNome(nome)}
            />
            <TextInput
                placeholder={'Descrição'}
                style={style2.input}
                onChangeText={descricao => setDescicao(descricao)}
            />

            <View style={style2.ViewImagem}>
              {image && <Image source={{ uri: image }} style={style2.imagem}/>}
            </View>
            <Button title="Carrege sua imagem" onPress={pickImage} />


            <TouchableOpacity 
                    title="Cadastrar"
                    style={styles.ButtonLogin}
                    >
                    <Text style={styles.textbuttonLogin}>Cadastrar</Text>
                </TouchableOpacity>
        </View>

    );
}

const style2 = StyleSheet.create({
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
    ViewImagem: {
      width: 400, 
      height: 400,
      backgroundColor:"beige",
      borderWidth: 2, 
      marginBottom: 20,
      //flex: 0.3,
  },
  imagem: {
      width: 400, 
      height: 400,
      resizeMode: 'stretch'
  },
  map: {
    width: 50,
    height:50,
  },

  });