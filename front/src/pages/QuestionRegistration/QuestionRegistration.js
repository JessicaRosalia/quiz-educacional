import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Select from '../../components/Select';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { postQuestion } from '../../api/utils';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TouchableHighlight } from 'react-native';

const QuestionRegistration = () => {

    const [questionDescription, setQuestionDescription] = useState("");
    const [alternativaA, setAlternativeA] = useState("");
    const [alternativeB, setAlternativeB] = useState("");
    const [alternativeC, setAlternativeC] = useState("");
    const [alternativeD, setAlternativeD] = useState("");
    const [selectedValue, setSelectedValue] = useState("Selecione");
    const [question, setQuestion] = useState();

    const questionParam = {
        prompt: questionDescription,
        options: [
            {
                body: alternativaA,
                answer: false
            },
            {
                body: alternativeB,
                answer: false
            },
            {
                body: alternativeC,
                answer: true
            },
            {
                body: alternativeD,
                answer: false
            }
        ]
    }

    async function registerQuestion () {
        await postQuestion(questionParam).then(question=>{
            setQuestion(question);
        }).catch(()=>{
            console.log("Ocorreu um erro ao tentar cadastrar a questão. Você pode tentar novamente.");
        })
    }


    return (
        <View>
            <ScrollView>
                <Label label={"Matéria"} required={true}/>
                <Select onChangeValueSelected={setSelectedValue} selectedValue={selectedValue}/>
                <InputText label={"Pergunta"} required={true} placeholder={"Informe o enunciado da pergunta"} onChangeValue={setQuestionDescription} />
                <Label label={"Alternativas de resposta"} required={false}/>
                <InputText label={"Alternativa A"} placeholder={"Informe o texto da alternativa A"} onChangeValue={setAlternativeA} />
                <InputText label={"Alternativa B"} placeholder={"Informe o texto da alternativa B"} onChangeValue={setAlternativeB}/>
                <InputText label={"Alternativa C"} placeholder={"Informe o texto da alternativa C"} onChangeValue={setAlternativeC}/>
                <InputText label={"Alternativa D"} placeholder={"Informe o texto da alternativa D"} onChangeValue={setAlternativeD}/>
                <TouchableHighlight style={{backgroundColor: "#ccc"}} onPress={registerQuestion}><Text>Cadastrar</Text></TouchableHighlight>
            </ScrollView>
        </View>
            
            
    );
};

export default QuestionRegistration;