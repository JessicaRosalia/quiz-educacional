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
import style from './style';
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
        <View style={style.containerRegisterQuestion}>
            <View style={style.viewBox}>
                <ScrollView>
                    <View style={style.form}>
                        <View style={style.subject}>
                            <Label label={"Matéria"} required={true}/>
                            <Select onChangeValueSelected={setSelectedValue} selectedValue={selectedValue}/>
                        </View>
                        <View style={style.questionDescription}>
                            <InputText label={"Pergunta"} required={true} placeholder={"Informe o enunciado da pergunta"} onChangeValue={setQuestionDescription} />
                        </View>
                        <View style={style.alternatives}>
                            <Text style={style.headerAlternatives}>Alternativas de resposta</Text>
                            <InputText label={"Alternativa A"} placeholder={"Informe o texto da alternativa A"} onChangeValue={setAlternativeA} />
                            <InputText label={"Alternativa B"} placeholder={"Informe o texto da alternativa B"} onChangeValue={setAlternativeB}/>
                            <InputText label={"Alternativa C"} placeholder={"Informe o texto da alternativa C"} onChangeValue={setAlternativeC}/>
                            <InputText label={"Alternativa D"} placeholder={"Informe o texto da alternativa D"} onChangeValue={setAlternativeD}/>
                            <TouchableHighlight style={style.registerButton} onPress={registerQuestion}><Text style={style.registerText}>Cadastrar</Text></TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
            
            
    );
};

export default QuestionRegistration;