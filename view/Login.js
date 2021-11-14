import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Button,
    ActivityIndicator,
    ScrollView,

} from 'react-native';


import UserController from '../controller/user/UserController';
import styles from '../assets/style';


export default function Login({navigation})
{

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroSenha, setErroSenha] = useState(null);
  
  const [users, setUsers] = useState(null);

  const User = new UserController();
  
  function login()
  {
    User.validaInputs(email, senha);
    setErroEmail(User.ErroEmail);
    setErroSenha(User.ErroSenha);
    const s = User.AllUser();
    
    console.log(s);

    return;
    if(User.loginValidate() === 1)
    {
        navigation.navigate('Home');
    }

  } 

    return (
        <View style={styles.FormContext}>

            <View style={styles.Form}>

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
                    password={true}
                    maxLength={8}
                    >
                </TextInput>
                <Text style={styles.textErro}>{erroSenha}</Text>


                <TouchableOpacity 
                    title="Login"
                    style={styles.ButtonLogin}
                    onPress={() => login()} 
                    >
                    <Text style={styles.textbuttonLogin}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    title="Register"
                    style={styles.ButtonRegister}
                    onPress={ () => navigation.navigate('Register')} 
                    >
                    <Text style={styles.textbuttonLogin}>Crie Uma Conta</Text>
                </TouchableOpacity>

            </View>
        </View>
);}