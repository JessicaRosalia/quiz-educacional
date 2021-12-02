import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Input } from 'react-native-elements/dist/input/Input';
import createAxiosInstance from '../../../api';
import TabNav from '../../../components/TabNav';
import style from '../style';

const StudentRegistration = ({navigation}) => {
    
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [nomeEscola, setNomeEscola] = useState(null);
    const [senha, setSenha] = useState(null);

    const [errorNome, setErrorNome] = useState(false);
    const [errorCpf, setErrorCpf] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorCadastro, setErrorCadastro] = useState(false);

    const cadastrar = async () => {
        if(!validar()){
            return;
        }

        const axios = await createAxiosInstance();

        axios.post("auth/signup", {
            name: nome,
            cpf,
            email,
            phoneNumber: telefone,
            schoolName: nomeEscola,
            password: senha,
            type: "student",
        }).then(()=> {
            navigation.navigate('Login');
        }).catch(error => {
            console.error(error);
            if (error.response) {
                const errorMsg = error.response.data.message;
                setErrorCadastro(errorMsg);
            }
        })
    }

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
                                <Text style={style.label}>Nome <Text style={style.required}>*</Text> </Text> 
                                <Input placeholder="Maria Heloísa Ferreira" keyboardType="default" placeholderTextColor="#c3c3c3"  onChangeText={value=>setNome(value)} errorMessage={errorNome} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Text style={style.label}>CPF <Text style={style.required}>*</Text> </Text>
                                <Input placeholder="XXX.XXX.XXX-XX" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setCpf(value)} errorMessage={errorCpf} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Input label="Telefone" placeholder="(84) 99900-0000" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setTelefone(value)} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            <View style={style.input}>
                                <Input label="Nome da escola" placeholder="Escola Estadual Novo Horizonte" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setNomeEscola(value)} style={{color: "#000", fontSize: 15 }}/>   
                            </View>

                            <View style={style.input}>
                                <Input label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value=>setEmail(value)} style={{color: "#000", fontSize: 15 }}/>
                            </View>                            

                            <View style={style.input}>
                                <Text style={style.label}>Senha <Text style={style.required}>*</Text> </Text> 
                                <Input placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} style={{color: "#000", fontSize: 15 }}/>
                            </View>

                            {errorCadastro != "" &&
                            <Text style={style.errorMsg} >{errorCadastro}</Text>}
                            <TouchableOpacity style={style.ContainerButton} onPress={()=>cadastrar()}>
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