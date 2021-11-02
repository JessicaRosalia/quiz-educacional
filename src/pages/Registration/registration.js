import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Input } from 'react-native-elements/dist/input/Input';
import TabNav from '../../components/TabNav';
import style from './style';

const Registration = ({navigation}) => {
    
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [nomeEscola, setNomeEscola] = useState(null);
    const [senha, setSenha] = useState(null);

    const [errorNome, setErrorNome] = useState(false);
    const [errorCpf, setErrorCpf] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);

    const validar = () => {
        let error = false
        if(nome == null){
            setErrorNome("Preencha seu nome corretamente.")
            error = true
        }
        if(cpf == null){
            setErrorCpf("Preencha seu CPF corretamente.")
            error = true
        }
        if(senha == null){
            setErrorSenha("Você precisa inserir uma senha.")
            error = true
        }
        return !error
    }

    return (
        <SafeAreaView>
            <View style={style.Container}>
                <View style={style.ViewBox}>
                    <ScrollView>
                        <View style={style.form}>
                            <View style={style.TabNav}>
                                <TabNav login={false} register={true} page={navigation}/>
                            </View>
                            
                            <View style={style.input}>
                                <Input label="Nome" placeholder="Maria Heloísa Ferreira" keyboardType="default" placeholderTextColor="#c3c3c3"  onChangeText={value=>setNome(value)} errorMessage={errorNome} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Input label="CPF" placeholder="XXX.XXX.XXX-XX" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setCpf(value)} errorMessage={errorCpf} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Input label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value=>setEmail(value)} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Input label="Telefone" placeholder="(84) 99900-0000" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setTelefone(value)} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Input label="Nome da escola" placeholder="Escola Estadual Novo Horizonte" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setNomeEscola(value)} style={{color: "#000", fontSize: 15 }}/>   
                            </View>

                            <View style={style.input}>
                                <Input label="Senha" placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <TouchableOpacity style={style.ContainerButton} onPress={()=>validar()}>
                                <Text style={style.registerText}>Cadastrar-se</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Registration;