import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import eyeShowPassword from '../../assets/icons/btn-verSenha.png';
import eyeHidePassword from '../../assets/icons/btn-ocultarSenha.png';
import { Input } from 'react-native-elements/dist/input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import Field from '../../components/Field/index';
import TabNav from '../../components/TabNav/index';
import style from './style';


const Login = ({navigation}) => {

    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    const [errorSenha, setErrorSenha] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [hidePass, setHidePass] = useState(true);

    const validar = () => {
        let error = false
        if(email == null){
            setErrorEmail("Preencha seu e-mail corretamente.")
            error = true
        }
        if(senha == null){
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
                        <Input label="E-mail" errorMessage={errorEmail} placeholder="exemplo@gmail.com" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value=>setEmail(value)} style={{color: "#000", fontSize: 15 }}/>
                    </View>
                    
                    <View style={style.input}>
                        <Input label="Senha" labelStyle={{color: '#000'}} placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} style={{color: "#000", fontSize: 15 }}/>
                    </View>

                    <TouchableOpacity >
                        <Text style={style.linkSenha}>Esqueci a Senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.containerButton} onPress={()=>validar()}>
                        <Text style={style.enterText} >Entrar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
                    <View style={style.Barra}>
                        <Text  style={style.linkCadastro}>  Não possui cadastro?  <Text style={style.textoCad}>Cadastre-se</Text></Text>
                    </View>
                </TouchableOpacity>
            </View >
        </SafeAreaView >
    )
}


export default Login;
