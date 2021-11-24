import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import eyeShowPassword from '../../assets/icons/btn-verSenha.png';
import eyeHidePassword from '../../assets/icons/btn-ocultarSenha.png';
import { Input } from 'react-native-elements/dist/input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import Field from '../../components/Field/index';
import TabNav from '../../components/TabNav/index';
import style from './style';

import axios from "../../api"
import { ThemeConsumer } from 'react-native-elements';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');

    const [errorSenha, setErrorSenha] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [errorCpf, setErrorCpf] = useState('');

    const login = () => {
        console.log("login")
        if (!validar()) {
            setErrorLogin('')
            return;
        }

        axios.post("/auth/login", {
            email,
            password: senha,
        }).then((res) => console.log(res.data)).catch(error => {
            const errorMsg = error.response.data.error;
            setErrorLogin(errorMsg)
        })
    }

    const [hidePass, setHidePass] = useState(true);

    const validar = () => {
        console.log("validar", email, senha)
        let error = false
        if (email == '') {
            setErrorEmail("Preencha seu e-mail corretamente.")
            error = true
        }
        if (senha == '') {
            setErrorSenha("Preencha sua senha corretamente.")
            error = true
        }
        return !error
    }

    return (
        <SafeAreaView >
            <View style={style.Container}>
                <View style={style.ViewBox}>


                    <View style={style.TabNav}>
                        <TabNav login={true} register={false} page={navigation} />
                    </View>

                    <View style={style.input}>
                        <Input label="E-mail" errorMessage={errorEmail} placeholder="exemplo@gmail.com" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value => setEmail(value)} style={{ color: "#000", fontSize: 15 }} />
                    </View>

                    <View style={style.input}>
                        <Input label="Senha" labelStyle={{ color: '#000' }} placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} style={{ color: "#000", fontSize: 15 }} />
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

                <TouchableOpacity onPress={() => navigation.navigate('TeacherRegistration')}>
                    <View style={style.Barra}>
                        <Text style={style.linkCadastro}>  Não possui cadastro?  <Text style={style.textoCad}>Cadastre-se</Text></Text>
                    </View>
                </TouchableOpacity>
            </View >
        </SafeAreaView >
    )
}


export default Login;
