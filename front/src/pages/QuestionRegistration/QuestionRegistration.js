import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Select from '../../components/Select';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const QuestionRegistration = () => {

    const [descricaoPergunta, setDescricaoPergunta] = useState("");
    const [alternativaA, setAlternativaA] = useState("");
    const [alternativaB, setAlternativaB] = useState("");
    const [alternativaC, setAlternativaC] = useState("");
    const [alternativaD, setAlternativaD] = useState("");
    const [selectedValue, setSelectedValue] = useState("Selecione");


    const handlerSelectedValue = (itemValue) => {
        setSelectedValue(itemValue);
    }


    useEffect(()=> {
        console.log(selectedValue);
    })

    return (
        <View>
            <ScrollView>
                <Label label={"Matéria"} required={true}/>
                <Select onChangeValueSelected={setSelectedValue} selectedValue={selectedValue}/>
                <InputText label={"Pergunta"} required={true} placeholder={"Informe o enunciado da pergunta"} onChangeValue={setDescricaoPergunta} />
                <Label label={"Alternativas de resposta"} required={false}/>
                <InputText label={"Alternativa A"} placeholder={"Informe o texto da alternativa A"} onChangeValue={setAlternativaA} />
                <InputText label={"Alternativa B"} placeholder={"Informe o texto da alternativa B"} onChangeValue={setAlternativaB}/>
                <InputText label={"Alternativa C"} placeholder={"Informe o texto da alternativa C"} onChangeValue={setAlternativaC}/>
                <InputText label={"Alternativa D"} placeholder={"Informe o texto da alternativa D"} onChangeValue={setAlternativaD}/>
            </ScrollView>
        </View>
            
            
    );
};

export default QuestionRegistration;