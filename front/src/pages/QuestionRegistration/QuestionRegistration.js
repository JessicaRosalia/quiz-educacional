import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Select from '../../components/Select';
import { editQuestionService, getUserId, postQuestion } from '../../api/utils';
import { TouchableHighlight } from 'react-native';
import { RadioButton } from 'react-native-paper';

import style from './style';
import Toast from 'react-native-root-toast';
const QuestionRegistration = ({questionSelected, setModalIsVisible}) => {

    const [userId, setUserId] = useState(false);
        
    useEffect(() => {
        getUserId().then((data) => setUserId(data.id)).catch((erro)=>console.log("Não foi possível recuperar o usuário logado."));
    }, [])

    const [selectedValue, setSelectedValue] = useState("");
    const [questionDescription, setQuestionDescription] = useState("");
    const [alternativeA, setAlternativeA] = useState("");
    const [alternativeB, setAlternativeB] = useState("");
    const [alternativeC, setAlternativeC] = useState("");
    const [alternativeD, setAlternativeD] = useState("");
    const [correctAlternative, setCorrectAlternative] = useState(false);


    const [question, setQuestion] = useState({});

    const [errorSubject, setErrorSubject] = useState(false);
    const [errorDesc, setErrorDesc] = useState(false);
    const [errorAlternA, setErrorAlternA] = useState(false);
    const [errorAlternB, setErrorAlternB] = useState(false);
    const [errorAlternC, setErrorAlternC] = useState(false);
    const [errorAlternD, setErrorAlternD] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if(questionSelected){
            setSelectedValue(questionSelected.category);
            setQuestionDescription(questionSelected.description);
            setAlternativeA(questionSelected.alternativeA.text);
            setAlternativeB(questionSelected.alternativeB.text);
            setAlternativeC(questionSelected.alternativeC.text);
            setAlternativeD(questionSelected.alternativeD.text);
            setCorrectAlternative(questionSelected.answerId);
            setQuestion({...questionSelected});
        }
    }, [questionSelected]);

    useEffect(()=>{
            if (alternativeA !== "" && alternativeB !== "" && alternativeC !== "" && alternativeD !== "" && selectedValue !== "Selecione" && questionDescription !== "" && correctAlternative !== false) {
                setIsDisabled(false);
            }else if(alternativeA == "" || alternativeB == "" || alternativeC == "" || alternativeD == "" || selectedValue == "Selecione" || questionDescription == "" || correctAlternative == false){
                setIsDisabled(true);
            }
    },[questionDescription, alternativeA, alternativeB, alternativeC, alternativeD, selectedValue, correctAlternative]);

    const registerIsInvalid = () => {
        let error = false
        if (alternativeA == null) {
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


    async function registerQuestion () {        
        const questionParam = {
            prompt: questionDescription,
            options: [
                {
                    body: alternativeA,
                    answer: correctAlternative === "A"
                },
                {
                    body: alternativeB,
                    answer: correctAlternative === "B"
                },
                {
                    body: alternativeC,
                    answer: correctAlternative === "C"
                },
                {
                    body: alternativeD,
                    answer: correctAlternative === "D"
                }
            ],
            userId: userId,
            questionCategoryId: 1,
        }
        if (!registerIsInvalid()) {
            await postQuestion(questionParam).then(()=>{
                Toast.show("Questão cadastrada com sucesso!", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                });
                setModalIsVisible(false);
            }).catch(()=>{
                Toast.show("Ocorreu um erro ao tentar cadastrar a questão. Tente novamente.", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                });
            })
        }
    }

    async function editQuestion () {
        const parameters = {
            id: question?.questionId,
            prompt: questionDescription,
            options: [
                {
                    id: question?.alternativeA?.id,
                    body: alternativeA,
                },
                {
                    id: question?.alternativeB?.id,
                    body: alternativeB,
                },
                {
                    id: question?.alternativeC?.id,
                    body: alternativeC,
                },
                {
                    id: question?.alternativeD?.id,
                    body: alternativeD,
                }
            ],
            userId: 2,
            answerId: correctAlternative,
            questionCategoryId: 1
        }
        await editQuestionService(parameters).then(()=> {
            Toast.show("A questão foi editada com sucesso!", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
            });
            setModalIsVisible(false);
        }).catch((error) => {
            Toast.show("Ocorreu um erro ao tentar editar a questão. Tente novamente.", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
            });
        })
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
                            <InputText value={question?.description} label={"Pergunta"} required={true} placeholder={"Informe o enunciado da pergunta"} onChangeValue={setQuestionDescription} errorMessage={errorDesc} />
                        </View>
                        <View style={style.alternatives}>
                            <Text style={style.headerAlternatives}>Alternativas de resposta</Text>
                            <InputText value={question?.alternativeA?.text || ""} label={"Alternativa A"} placeholder={"Informe o texto da alternativa A"} onChangeValue={setAlternativeA} errorMessage={errorAlternA} />
                            <InputText value={question?.alternativeB?.text || ""} label={"Alternativa B"} placeholder={"Informe o texto da alternativa B"} onChangeValue={setAlternativeB} errorMessage={errorAlternB} />
                            <InputText value={question?.alternativeC?.text || ""} label={"Alternativa C"} placeholder={"Informe o texto da alternativa C"} onChangeValue={setAlternativeC} errorMessage={errorAlternC} />
                            <InputText value={question?.alternativeD?.text || ""} label={"Alternativa D"} placeholder={"Informe o texto da alternativa D"} onChangeValue={setAlternativeD} errorMessage={errorAlternD} />
                        </View>
                        <View>
                            <Label style={style.label} label={"Alternativa Correta:"} required={true}/>
                            <View style={style.correctAlternative}>
                                <RadioButton.Group onValueChange={v => setCorrectAlternative(v)} value={correctAlternative}>
                                    <View style={style.containerAlternative}>
                                        <RadioButton value={ question?.alternativeA?.id || "A"}/>
                                        <Text>Alternativa A</Text>
                                    </View>
                                    <View style={style.containerAlternative} >
                                        <RadioButton value={question?.alternativeB?.id || "B"}/>
                                        <Text>Alternativa B</Text>
                                    </View>
                                    <View style={style.containerAlternative}>
                                        <RadioButton value={question?.alternativeC?.id || "C"}/>
                                        <Text>Alternativa C</Text>
                                    </View>
                                    <View style={style.containerAlternative}>
                                        <RadioButton value={question?.alternativeD?.id || "D"}/>
                                        <Text>Alternativa D</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        <TouchableHighlight disabled={isDisabled} style={style.registerButton} onPress={questionSelected ? editQuestion : registerQuestion}><Text style={style.registerText}>Cadastrar</Text></TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default QuestionRegistration;