import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import Field from '../../components/Field';
import TabNav from '../../components/TabNav';

const Registration = ({navigation}) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <TabNav login={false} register={true} page={navigation}/>
                <Field label="Nome" placeholder="Maria Heloísa Ferreira" keyboardType="default" />
                <Field label="CPF" placeholder="XXX.XXX.XXX-XX" keyboardType="default" />
                <Field label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address" />
                <Field label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address" />
                <Field label="Telefone" placeholder="(84) 9956-5501" keyboardType="default" />
                <Field label="Nome da escola" placeholder="Escola Estadual Novo Horizonte" keyboardType="default" />
                <Field label="Senha" placeholder="Sua senha" keyboardType="default" />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Registration;