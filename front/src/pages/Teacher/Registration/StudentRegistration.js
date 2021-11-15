import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Input } from 'react-native-elements/dist/input/Input';
import TabNav from '../../../components/TabNav';
import style from './style';

const StudentRegistration = ({navigation}) => {
    
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [nomeEscola, setNomeEscola] = useState(null);
    const [numeroMatricula, SetNumeroMatricula] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    const [errorNome, setErrorNome] = useState(false);
    const [errorCpf, setErrorCpf] = useState(false);
    const [errorNomeEscola, SetErrorNomeEscola] = useState(false);
    const [errorNumeroMatricula, setErrorNumeroMatricula] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);

    const validar = () => {
        let error = false
        if(nome == null || nome == ""){
            setErrorNome("Preencha seu nome corretamente.")
            error = true
        }
        if(cpf == null || cpf == ""){
            setErrorCpf("Preencha seu CPF corretamente.")
            error = true
        }
        if(nomeEscola == null || nomeEscola == ""){
            SetErrorNomeEscola("Você precisa inserir o nome da escola.")
            error = true
        }
        if(numeroMatricula == null || numeroMatricula == ""){
            setErrorNumeroMatricula("Você precisa inserir sua Matrícula.")
            error = true
        }
        if(email == null || email == ""){
            setErrorEmail("Você precisa inserir um e-mail.")
            error = true
        }
        if(senha == null || senha == ""){
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
                                <Text style={style.label}>Nome <Text style={style.required}>*</Text> </Text> 
                                <Input placeholder="Maria Heloísa Ferreira" keyboardType="default" placeholderTextColor="#c3c3c3"  onChangeText={value=>setNome(value)} errorMessage={errorNome} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Text style={style.label}>CPF <Text style={style.required}>*</Text> </Text>
                                <Input placeholder="XXX.XXX.XXX-XX" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setCpf(value)} errorMessage={errorCpf} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Text style={style.label}>Nome da Escola <Text style={style.required}>*</Text> </Text>
                                <Input placeholder="Escola Estadual Novo Horizonte" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setNomeEscola(value)} errorMessage={errorNomeEscola} style={{color: "#000", fontSize: 15 }}/>   
                            </View>

                            <View style={style.input}>
                                <Text style={style.label}>Número da Matrícula da Escola <Text style={style.required}>*</Text> </Text>
                                <Input placeholder="706.543.673-3" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>SetNumeroMatricula(value)} errorMessage={errorNumeroMatricula} style={{color: "#000", fontSize: 15 }}/>   
                            </View>

                            <View style={style.input}>
                                <Text style={style.label}>E-mail <Text style={style.required}>*</Text> </Text>
                                <Input placeholder="exemplo@gmail.com" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value=>setEmail(value)} errorMessage={errorEmail} style={{color: "#000", fontSize: 15 }}/>
                            </View>                            

                            <View style={style.input}>
                                <Text style={style.label}>Senha <Text style={style.required}>*</Text> </Text> 
                                <Input placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} style={{color: "#000", fontSize: 15 }}/>
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
export default StudentRegistration;