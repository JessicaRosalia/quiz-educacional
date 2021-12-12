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
    const questionId=1;

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
                setAnswerQuestion(data.id);
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
                    <Text>Humanas</Text>
                </View>
                <Text>Nome 2</Text>
                
            </View>
            <View style={style.answerQuestion}>
                <Text>{prompt}</Text>
            </View>
            <View>
                <QuestionAnswerField answerText={option1.body}/>
                <QuestionAnswerField answerText={option2.body}/>
                <QuestionAnswerField answerText="Resposta 3"/>
                <QuestionAnswerField answerText="Resposta 4"/>
            </View>
        </View>
        
    )
}
export default QuestionScreen;