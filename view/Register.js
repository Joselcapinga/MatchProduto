import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';

import UserController from '../controller/users/UserController';
import styles from '../assets/style';

export default function Register({navigation})
{
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [erroEmail, setErroEmail] = useState(null);
    const [erroSenha, setErroSenha] = useState(null);
    
    const User = new UserController();

    function login()
    {
        User.validaInputs(email, senha);
        setErroEmail(User.ErroEmail);
        setErroSenha(User.ErroSenha);
    }

    return (

        <View style={styles.FormContext}>

        <View style={styles.Form}>
        <ScrollView>
        <Text style={styles.FormLabel}>Nome</Text>
            <TextInput
                placeholder="Informe seu nome"
                style={styles.FormInput}
                onChangeText={email => setEmail(email)}
                value={email}
                >
            </TextInput>
            <Text style={styles.textErro}>{erroEmail}</Text>

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
                >
            </TextInput>
            <Text style={styles.textErro}>{erroSenha}</Text>

            <Text style={styles.FormLabel}>Confirme Senha</Text>
            <TextInput
                placeholder="Informe sua senha"
                style={styles.FormInput}
                onChangeText={senha => setSenha(senha)}
                value={senha}
                >
            </TextInput>
            <Text style={styles.textErro}>{erroSenha}</Text>

            <TouchableOpacity 
                title="Login"
                style={styles.ButtonLogin}
                onPress={() => login()} 
                >
                <Text style={styles.textbuttonLogin}>Cadastrar</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    </View>


);}