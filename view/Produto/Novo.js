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

export default function Novo({navigation})
{

    const [image, setImage] = useState(null);

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


            <TouchableOpacity>
                <View style={{ backgroundColor: 'blue', padding: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center'}}>
                    Cadastrar
                </Text>
                </View>
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