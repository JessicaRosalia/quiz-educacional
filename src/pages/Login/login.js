import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Field from '../../components/Field/index';
import TabNav from '../../components/TabNav/index';
import style from './style';


const Login = () => {
    return (
        <SafeAreaView >
            <View style={style.Container}>
                <View style={style.ViewBox}>

                    <View style={style.TabNav}>
                        <TabNav login={true} register={false} page="login" />
                    </View>

                    <View style={style.Email}>
                        <Field label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address" />
                    </View>

                    <View style={style.Senha}>
                        <Field label="Senha" placeholder="Sua senha" keyboardType="default" />
                    </View>

                    <TouchableOpacity >
                        <Text style={style.linkSenha}>Esqueci a Senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.containerButton}>
                        <Text style={style.enterText} >Entrar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity >
                <View style={style.Barra}>
                <Text  style={style.linkCadastro}>  Não possui cadastro?  <Text style={style.textoCad}>Cadastre-se</Text>
                </Text>
                        
                </View>
                
                </TouchableOpacity>
            </View >
            
        </SafeAreaView >

    )
}


export default Login;
