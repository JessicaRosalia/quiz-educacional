import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Field from '../../components/Field';
import TabNav from '../../components/TabNav';



const Login = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>LOGIN AQUI</Text>
                <TabNav login={true} register={false} page="login" />
                <Field label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address"/>
                <Field label="Senha" placeholder="Sua senha" keyboardType="default" />
            </View>
        </SafeAreaView>
    )
}

export default Login;