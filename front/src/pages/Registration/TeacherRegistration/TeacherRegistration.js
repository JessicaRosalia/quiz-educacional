import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';
import { Input } from 'react-native-elements/dist/input/Input';
import createAxiosInstance from '../../../api';
import TabNav from '../../../components/TabNav/index';
import style from '../style';
import Toast from 'react-native-root-toast';
import { capitalize } from '../../../components/utils';

const TeacherRegistration = ({ navigation }) => {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nomeEscola, setNomeEscola] = useState("");
    const [numeroMatricula, SetNumeroMatricula] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [errorNome, setErrorNome] = useState(false);
    const [errorCpf, setErrorCpf] = useState(false);
    const [errorNomeEscola, SetErrorNomeEscola] = useState(false);
    const [errorNumeroMatricula, setErrorNumeroMatricula] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorCadastro, setErrorCadastro] = useState(false);


    const cadastrar = async () => {
        if (!validar()) {
            return;
        }

        const axios = await createAxiosInstance();

        axios.post("auth/signup", {
            name: nome,
            cpf,
            email,
            schoolMat: numeroMatricula,
            schoolName: nomeEscola,
            password: senha,
            type: "professor",
        }).then(() => {
            Toast.show("Professor cadastrado!", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
            });
            navigation.navigate('Login');
        }).catch(error => {
            if (error.response) {
                const errorMsg = error.response.data.message;
                Toast.show(capitalize(errorMsg), {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                });
            }
        })
    }

    const validar = () => {
        let error = false
        if (nome == null || nome == "") {
            setErrorNome("Preencha seu nome corretamente.")
            error = true
        }
        if (cpf == null || cpf == "") {
            setErrorCpf("Preencha seu CPF corretamente.")
            error = true
        }
        if (nomeEscola == null || nomeEscola == "") {
            SetErrorNomeEscola("Você precisa inserir o nome da escola.")
            error = true
        }
        if (numeroMatricula == null || numeroMatricula == "") {
            setErrorNumeroMatricula("Você precisa inserir sua Matrícula.")
            error = true
        }
        if (email == null || email == "") {
            setErrorEmail("Você precisa inserir um e-mail.")
            error = true
        }
        if (senha == null || senha == "") {
            setErrorSenha("Você precisa inserir uma senha.")
            error = true
        }
        return !error
    }

    return (
        <View style={style.Container}>
            <View style={style.ViewBox}>
                <View style={style.TabNav}>
                    <Text style={style.headerText}>Cadastro de Professor</Text>
                </View>
                <ScrollView style={style.scrollView}>
                    <View style={style.form}>

                        <View style={style.input}>
                            <Text style={style.label}>Nome <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="Maria Heloísa Ferreira" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setNome(value)} errorMessage={errorNome} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Text style={style.label}>CPF <Text style={style.required}>*</Text> </Text>
                            <Input InputComponent={MaskInput} onChangeText={(_masked, unmasked) => { setCpf(unmasked); }} value={cpf} mask={Masks.BRL_CPF}
                                placeholder="XXX.XXX.XXX-XX" keyboardType="number-pad" placeholderTextColor="#c3c3c3" errorMessage={errorCpf} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Text style={style.label}>Nome da Escola <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="Escola Estadual Novo Horizonte" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setNomeEscola(value)} errorMessage={errorNomeEscola} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Text style={style.label}>Número da Matrícula da Escola <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="706.543.673-3" keyboardType="number-pad" placeholderTextColor="#c3c3c3" onChangeText={value => SetNumeroMatricula(value)} errorMessage={errorNumeroMatricula} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Text style={style.label}>E-mail <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="exemplo@gmail.com" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#c3c3c3" onChangeText={value => setEmail(value)} errorMessage={errorEmail} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Text style={style.label}>Senha <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setSenha(value)} secureTextEntry={true} errorMessage={errorSenha} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                    </View>
                </ScrollView>
                {errorCadastro != "" &&
                    <Text style={style.errorMsg} >{errorCadastro}</Text>}

                <TouchableOpacity style={style.ContainerButton} onPress={() => cadastrar()}>
                    <Text style={style.registerText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TeacherRegistration;