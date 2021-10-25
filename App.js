import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './view/Login';
import Register from './view/Register';
import Home from './view/Home';
import Home2 from './view/Home2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
        

        <Stack.Screen name="Home2" component={Home2} 
            options={{ title: 'Home2', 
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
        }}
          />


        <Stack.Screen name="Home" component={Home} 
            options={{ title: 'Home', 
            headerStyle: {backgroundColor: '#e7305b'}, 
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
            headerTitleAlign: 'center',
        }}
          />
        
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
});
