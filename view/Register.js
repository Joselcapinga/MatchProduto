import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';

import RegisterController from '../controller/user/RegisterController';
import {Iconicons} from '@expo/vector-icons';
import styles from '../assets/style';

export default function Register({navigation})
{
    
    //var
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [confSenha, setConfirmeSenha] = useState(null);
    
    // mensagem erros
    const [erroName, setErroName] = useState(null);
    const [erroEmail, setErroEmail] = useState(null);
    const [erroSenha, setErroSenha] = useState(null);
    const [erroConfirmSenha, setErroConfirmSenha] = useState(null);
    const [erroSenhaDiferente, setErroSenhaDiferente] = useState(null);


    const User = new RegisterController(name, email, senha, confSenha);

    
    function chek_register()
    {
        User.validaInputs();
        setErroName(User.ErroName);
        setErroEmail(User.ErroEmail);
        setErroSenha(User.ErroSenha);
        setErroConfirmSenha(User.ErroConfirmeSenha);
        setErroSenhaDiferente(User.ErroSenhaDiferente);
    }

    //register firebase
    const doUserRegistration = async function () {
        // Note that these values come from state variables that we've declared before
        const usernameValue = username;
        const passwordValue = password;
        // Since the signUp method returns a Promise, we need to call it using await
        return await Parse.User.signUp(usernameValue, passwordValue)
          .then((createdUser) => {
            // Parse.User.signUp returns the already created ParseUser object if successful
            Alert.alert(
              'Success!',
              `User ${createdUser.getUsername()} was successfully created!`,
            );
            return true;
          })
          .catch((error) => {
            // signUp can fail if any parameter is blank or failed an uniqueness check on the server
            Alert.alert('Error!', error.message);
            return false;
          });
      };

    return (

        <View style={styles.FormContext}>

        <View style={styles.Form}>
        <ScrollView>
        <Text style={styles.FormLabel}>Nome</Text>
            <TextInput
                placeholder="Informe seu nome"
                style={styles.FormInput}
                onChangeText={name => setName(name)}
                value={name}
                >
            </TextInput>
            <Text style={styles.textErro}>{erroName}</Text>

            <Text style={styles.FormLabel}>Email</Text>
            <TextInput
                placeholder="Informe seu email"
                style={styles.FormInput}
                onChangeText={email => setEmail(email)}
                value={email}
                >
            </TextInput>
            <Text style={styles.textErro}>{erroEmail}</Text>
                
            <Text style={styles.FormLabel}>Senha</Text>
            <TextInput
                placeholder="Informe sua senha"
                style={styles.FormInput}
                onChangeText={senha => setSenha(senha)}
                value={senha}
                maxLength={8}
                >
            </TextInput>
            <Text style={styles.textErro}>{erroSenha}</Text>

            <Text style={styles.FormLabel}>Confirme Senha</Text>
            <TextInput
                placeholder="Informe confirmação da senha"
                style={styles.FormInput}
                onChangeText={confSenha => setConfirmeSenha(confSenha)}
                value={confSenha}
                maxLength={8}
                >
            </TextInput>
            <Text style={styles.textErro}>{erroConfirmSenha}</Text>
            <Text style={styles.textErro}>{erroSenhaDiferente}</Text>

            <TouchableOpacity 
                title="Login"
                style={styles.ButtonLogin}
                onPress={() => chek_register()} 
                >
                <Text style={styles.textbuttonLogin}>Cadastrar</Text>
            </TouchableOpacity>

            

            </ScrollView>
        </View>
    </View>


);}