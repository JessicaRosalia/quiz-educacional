import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from 'react-native-elements/dist/input/Input';
import createAxiosInstance from '../../../api';
import Toast from 'react-native-root-toast';
import style from '../style';

const StudentRegistration = ({ navigation }) => {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nomeEscola, setNomeEscola] = useState("");
    const [senha, setSenha] = useState("");

    const [errorNome, setErrorNome] = useState(false);
    const [errorCpf, setErrorCpf] = useState(false);
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
            phoneNumber: telefone,
            schoolName: nomeEscola,
            password: senha,
            type: "student",
        }).then(() => {
            navigation.navigate('Login');
        }).catch(error => {
            console.error(error);
            if (error.response) {
                const errorMsg = error.response.data.message;
                console.log(errorMsg);
                Toast.show(errorMsg[0].toUpperCase() + errorMsg.slice(1), {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                });
            }
        })
    }

    const validar = () => {
        let error = false
        if (nome == null) {
            setErrorNome("Preencha seu nome corretamente.")
            error = true
        }
        if (cpf == null) {
            setErrorCpf("Preencha seu CPF corretamente.")
            error = true
        }
        if (senha == null) {
            setErrorSenha("Você precisa inserir uma senha.")
            error = true
        }
        return !error
    }

    return (
        <View style={style.Container}>
            <View style={style.ViewBox}>
                <View style={style.TabNav}>
                    <Text style={style.headerText}>Cadastro de Aluno</Text>
                </View>
                <ScrollView style={style.scrollView}>
                    <View style={style.form}>

                        <View style={style.input}>
                            <Text style={style.label}>Nome <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="Maria Heloísa Ferreira" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setNome(value)} errorMessage={errorNome} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Text style={style.label}>CPF <Text style={style.required}>*</Text> </Text>
                            <Input placeholder="XXX.XXX.XXX-XX" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setCpf(value)} errorMessage={errorCpf} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Input label="Telefone" placeholder="(84) 99900-0000" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setTelefone(value)} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Input label="Nome da escola" placeholder="Escola Estadual Novo Horizonte" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value => setNomeEscola(value)} style={{ color: "#000", fontSize: 15 }} />
                        </View>

                        <View style={style.input}>
                            <Input label="E-mail" placeholder="exemplo@gmail.com" keyboardType="email-address" placeholderTextColor="#c3c3c3" onChangeText={value => setEmail(value)} style={{ color: "#000", fontSize: 15 }} />
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
export default StudentRegistration;