import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Select from '../../components/Select';
import { postQuestion } from '../../api/utils';
import { TouchableHighlight } from 'react-native';
import style from './style';
const QuestionRegistration = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const [questionDescription, setQuestionDescription] = useState("");
    const [alternativaA, setAlternativeA] = useState("");
    const [alternativeB, setAlternativeB] = useState("");
    const [alternativeC, setAlternativeC] = useState("");
    const [alternativeD, setAlternativeD] = useState("");
    const [question, setQuestion] = useState();

    const [errorSubject, setErrorSubject] = useState(false);
    const [errorDesc, setErrorDesc] = useState(false);
    const [errorAlternA, setErrorAlternA] = useState(false);
    const [errorAlternB, setErrorAlternB] = useState(false);
    const [errorAlternC, setErrorAlternC] = useState(false);
    const [errorAlternD, setErrorAlternD] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
        if (alternativaA !== "" && alternativeB !== "" && alternativeC !== "" && alternativeD !== "" && selectedValue !== "Selecione" && questionDescription !== "") {
            setIsDisabled(false);
        }else if(alternativaA == "" || alternativeB == "" || alternativeC == "" || alternativeD == "" || selectedValue == "Selecione" || questionDescription == ""){
            setIsDisabled(true);
        }
    },[questionDescription, alternativaA, alternativeB, alternativeC, alternativeD, selectedValue]);

    const registerIsInvalid = () => {
        let error = false
        if (alternativaA == null) {
            setErrorAlternA("Preencha o campo corretamente.");
            error = true;
        }
        if (alternativeB == null) {
            setErrorAlternB("Preencha o campo corretamente.");
            error = true;
        }
        if (alternativeC == null) {
            setErrorAlternC("Preencha o campo corretamente.");
            error = true;
        }
        if (alternativeD == null) {
            setErrorAlternD("Preencha o campo corretamente.");
            error = true;
        }
        return error;
    }

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
        ],
        userId: 1,
        questionCategoryId: 1
    }

    async function registerQuestion () {
        if (!registerIsInvalid()) {
            await postQuestion(questionParam).then(question=>{
                setQuestion(question);
            }).catch(()=>{
                console.log("Ocorreu um erro ao tentar cadastrar a questão. Você pode tentar novamente.");
            })
        }
    }


    return (
        <View style={style.container}>
            <Text style={style.pageTitle}>Cadastro de Questão</Text>
            <View style={style.viewBox}>
                <ScrollView>
                    <View style={style.form}>
                        <View style={style.subject}>
                            <Label label={"Matéria"} required={true}/>
                            <Select onChangeValueSelected={setSelectedValue} selectedValue={selectedValue}/>
                        </View>
                        <View style={style.questionDescription}>
                            <InputText label={"Pergunta"} required={true} placeholder={"Informe o enunciado da pergunta"} onChangeValue={setQuestionDescription} errorMessage={errorDesc} />
                        </View>
                        <View style={style.alternatives}>
                            <Text style={style.headerAlternatives}>Alternativas de resposta</Text>
                            <InputText label={"Alternativa A"} placeholder={"Informe o texto da alternativa A"} onChangeValue={setAlternativeA} errorMessage={errorAlternA} />
                            <InputText label={"Alternativa B"} placeholder={"Informe o texto da alternativa B"} onChangeValue={setAlternativeB} errorMessage={errorAlternB} />
                            <InputText label={"Alternativa C"} placeholder={"Informe o texto da alternativa C"} onChangeValue={setAlternativeC} errorMessage={errorAlternC} />
                            <InputText label={"Alternativa D"} placeholder={"Informe o texto da alternativa D"} onChangeValue={setAlternativeD} errorMessage={errorAlternD} />
                            <TouchableHighlight disabled={isDisabled} style={style.registerButton} onPress={registerQuestion}><Text style={style.registerText}>Cadastrar</Text></TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default QuestionRegistration;