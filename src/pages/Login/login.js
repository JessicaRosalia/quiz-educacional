import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Field from '../../components/Field/index';
import TabNav from '../../components/TabNav/index';
import style from './style';


//  <Text style={style.label}>{label}</Text>
const Login = () => {
    return (
        <SafeAreaView>
            <View  >
                <TabNav login={true} register={false} page="login" />
                <Field label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address"/>
                <Field label="Senha" placeholder="Sua senha" keyboardType="default" />
                <TouchableOpacity style={style.containerButton}>
                    <Text style={style.enterText} >Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default Login;
