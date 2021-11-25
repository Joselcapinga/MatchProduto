import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Login from './view/Auth/Login';
import Register from './view/Auth/Register';
import Home from './view/Home';
import ImagePickerExample from './view/ImagePickerExample';
import Produtos from './view/Produto/Produtos';
import NovoProduto from './view/Produto/Novo';

const Stack = createNativeStackNavigator();



function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
      <Stack.Screen name="Login" component={Login} 
            options={{ title: 'Login', 
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
        }}
          />

        <Stack.Screen name="Register" component={Register} 
            options={{ title: 'Crie Uma Conta', 
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
        }}
        />

        <Stack.Screen name="Home" component={Home}
        
          options={({ navigation, route }) => ({
            title: 'Home',
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
            headerRight: () => (
              <>
                  <Text style={styles.headerRight} onPress={() => navigation.navigate('Produtos')}>Meus Produtos</Text>
                  <Ionicons
                      name={'person-outline'}
                      size={25}
                      color={'white'}
                      style={{ marginRight: 15 }}
                      onPress={() => navigation.navigate('Produtos')}
                    />
                </>
            ),
            })}
        />
          
        <Stack.Screen name="ImagePickerExample" component={ImagePickerExample} 
            options={{ title: 'Crie Uma Conta', 
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
        }}
        />

        <Stack.Screen name="Produtos" component={Produtos} 
            options={({ navigation, route }) => ({
            title: 'Todos os Produtos',
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
              headerRight: () => (
                <Ionicons
                  name={'ios-add-circle'}
                  size={25}
                  color={'white'}
                  style={{ marginRight: 15 }}
                  onPress={() => navigation.navigate('NovoProduto')}
                />
              ),
            })}
        />

        <Stack.Screen name="NovoProduto" component={NovoProduto} 
            options={{ title: 'Novo Produto', 
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    fontSize:25,
    color: '#fff',
    marginRight: 13
  }
});
