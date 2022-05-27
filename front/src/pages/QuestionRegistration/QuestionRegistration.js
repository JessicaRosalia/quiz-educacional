import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Select from '../../components/Select';
import { editQuestionService, getUserId, postQuestion } from '../../api/utils';
import { TouchableHighlight } from 'react-native';
import style from './style';
const QuestionRegistration = ({questionSelected}) => {

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
             setQuestion({...questionSelected});
        }
    }, [questionSelected]);

    useEffect(()=>{
            if (alternativeA !== "" && alternativeB !== "" && alternativeC !== "" && alternativeD !== "" && selectedValue !== "Selecione" && questionDescription !== "") {
                setIsDisabled(false);
            }else if(alternativeA == "" || alternativeB == "" || alternativeC == "" || alternativeD == "" || selectedValue == "Selecione" || questionDescription == ""){
                setIsDisabled(true);
            }
    },[questionDescription, alternativeA, alternativeB, alternativeC, alternativeD, selectedValue]);

//     useEffect(()=>{
//         if (question?.alternativeA?.text !== "" && question?.alternativeB?.text !== "" && question?.alternativeC?.text !== "" && question?.alternativeD?.text !== "" && selectedValue !== "Selecione" && question?.description !== "") {
//             setIsDisabled(false);
//         }else if(question?.alternativeA?.text == "" || question?.alternativeB?.text == "" || question?.alternativeC?.text == "" || question?.alternativeD?.text == "" || selectedValue == "Selecione" || question?.description == ""){
//             setIsDisabled(true);
//         }
// },[question?.description, question?.alternativeA?.text, question?.alternativeB?.text, question?.alternativeC?.text, question?.alternativeD?.text, selectedValue]);

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

    const questionParam = {
        prompt: questionDescription,
        options: [
            {
                body: alternativeA,
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
        userId: userId,
        questionCategoryId: 1,
    }

    async function registerQuestion () {
        if (!registerIsInvalid()) {
            await postQuestion(questionParam).then(question=>{
                // setQuestion(question);
            }).catch(()=>{
                console.log("Ocorreu um erro ao tentar cadastrar a questão. Você pode tentar novamente.");
            })
        }
    }

    async function editQuestion () {
        const parameter = {
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
            userId: userId,
            answerId: question?.answerId,
            questionCategoryId: 1
        }
        await editQuestionService(parameter).then(()=> {
            console.log("editou");
        }).catch(error => console.log("erroooo", error.response.data))
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
                            <TouchableHighlight disabled={isDisabled} style={style.registerButton} onPress={questionSelected ? editQuestion : registerQuestion}><Text style={style.registerText}>Cadastrar</Text></TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default QuestionRegistration;