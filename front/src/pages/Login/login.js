import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import style from './style';

import createAxiosInstance from "../../api";
import * as SecureStore from 'expo-secure-store';
import { getUserInfo } from '../../api/utils';
import Toast from 'react-native-root-toast';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');

    const [errorSenha, setErrorSenha] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [errorCpf, setErrorCpf] = useState('');

    const login = async () => {
        if (!validar()) {
            setErrorLogin('')
            return;
        }

        const axios = await createAxiosInstance();

        axios.post("/auth/login", {
            email,
            password: senha,
        }).then((res) => {
            const { token } = res.data
            SecureStore.setItemAsync("auth-token", token).then(() => {
                let user = getUserInfo(token);
                Toast.show("Usuário logado com sucesso!", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.CENTER,
                });
                if (user.user_type === "student") navigation.navigate('StudentHome');
                if (user.user_type === "professor") navigation.navigate('TeacherHome');
            })
        }).catch(error => {
            console.error(error);
            if (error.response) {
                const errorMsg = error.response.data.message;
                console.log(errorMsg);
                Toast.show(errorMsg[0].toUpperCase() + errorMsg.slice(1), {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                });
            }
        })
    }

    const [hidePass, setHidePass] = useState(true);

    const validar = () => {
        let error = false
        if (email == '') {
            setErrorEmail("Preencha seu e-mail corretamente.")
            error = true
        } else {
            setErrorEmail("")
        }
        if (senha == '') {
            setErrorSenha("Preencha sua senha corretamente.")
            error = true
        } else {
            setErrorSenha("")
        }
        return !error
    }

    return (
        <View style={style.Container}>
            <View style={style.ViewBox}>


                <View style={style.TabNav}>
                    <Text style={style.headerText}>Login</Text>
                </View>

                <View style={style.input}>
                    <Input label="E-mail" errorMessage={errorEmail} errorStyle={{ color: "red" }} placeholder="exemplo@gmail.com" autoCapitalize="none" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value => setEmail(value)} style={{ color: "#000", fontSize: 15 }} />
                </View>

                <View style={style.input}>
                    <Input label="Senha" labelStyle={{ color: '#000' }} placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                </View>

                <TouchableOpacity >
                    <Text style={style.linkSenha}>Esqueci a Senha</Text>
                </TouchableOpacity>

                {errorLogin != "" &&
                    <Text style={style.errorMsg} >{errorLogin}</Text>}

                <TouchableOpacity style={style.containerButton} onPress={() => login()}>
                    <Text style={style.enterText} >Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                <View style={style.Barra}>
                    <Text style={style.linkCadastro}>  Não possui cadastro?  <Text style={style.textoCad}>Cadastre-se</Text></Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default Login;
