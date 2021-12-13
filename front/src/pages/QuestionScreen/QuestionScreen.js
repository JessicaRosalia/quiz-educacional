import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { getUserInfo } from '../../api/utils';
import QuestionAnswerField from '../../components/QuestionAnswerField';
import createAxiosInstance from "../../api";
import style from '../QuestionScreen/style';
import { capitalize } from '../../components/utils';

function QuestionScreen() {

    const [answerQuestion, setAnswerQuestion] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [option1, setOption1] = useState([]);
    const [option2, setOption2] = useState([]);
    const [option3, setOption3] = useState([]);
    const [option4, setOption4] = useState([]);

    const [nome, setNome] = useState("");
    const questionId=2;

    useEffect(async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const user = getUserInfo(token);
        setNome(capitalize(user.name));
    })

    useEffect(() => {
       async function getQuestion () {
            const axios = await createAxiosInstance();
            axios.get(`/question/${questionId}`).then(res => {
                var data = res.data;
                setPrompt(data.prompt);
                setAnswerQuestion(data.answerId);
            }).catch((error)=>{
                console.warn("ERRO: ", error);
            })
       }
        getQuestion();
    }, [])


    useEffect(() => {
       async function getOptions () {
            const axios = await createAxiosInstance();
            axios.get(`/question/${questionId}`).then(res => {
                var data = res.data;
                setOption1(data.options[0]);
                setOption2(data.options[1]);
                setOption3(data.options[2]);
                setOption4(data.options[3]);
            }).catch((error)=>{
                console.warn("ERRO: ", error);
            })
        }
        getOptions();
    }, [])

    return (
        <View>
            <View style={style.questionScreenHeader}>
                <Text>{nome}</Text>
                <View style={style.infoMatch}>
                    <Text>30 Segundos</Text>
                    <Text style={style.area}>História</Text>
                </View>
                <Text>Nome 2</Text>
                
            </View>
            <View style={style.question}>
                <Text style={style.questionText}>{prompt}</Text>
            </View>
            <View style={style.answerQuestion}>
                <QuestionAnswerField option={option1} answer={answerQuestion}/>
                <QuestionAnswerField option={option2} answer={answerQuestion}/>
                <QuestionAnswerField option={option3} answer={answerQuestion}/>
                <QuestionAnswerField option={option4} answer={answerQuestion}/>
            </View>
        </View>
        
    )
}
export default QuestionScreen;