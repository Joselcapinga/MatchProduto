import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';
import firebase from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/firebase-auth';
import RegisterController from '../../controller/user/RegisterController';
import {Iconicons} from '@expo/vector-icons';
import styles from '../../assets/style';


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

    function register_user()
    {
        if(User.AddRegister() == 1)
        {
            //navigation.navigate('Home');
        }
        setErroName(User.ErroName);
        setErroEmail(User.ErroEmail);
        setErroSenha(User.ErroSenha);
        setErroConfirmSenha(User.ErroConfirmeSenha);
        setErroSenhaDiferente(User.ErroSenhaDiferente);
    }

    function regist()
    {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
          return
        });
  
        alert("usuário cadastrado com sucesso !");
    }
    
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
                secureTextEntry
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
                secureTextEntry
                >
            </TextInput>
            <Text style={styles.textErro}>{erroConfirmSenha}</Text>
            <Text style={styles.textErro}>{erroSenhaDiferente}</Text>

            <TouchableOpacity 
                title="Login"
                style={styles.ButtonLogin}
                onPress={() => register_user()} 
                >
                <Text style={styles.textbuttonLogin}>Cadastrar</Text>
            </TouchableOpacity>

            

            </ScrollView>
        </View>
    </View>


);}