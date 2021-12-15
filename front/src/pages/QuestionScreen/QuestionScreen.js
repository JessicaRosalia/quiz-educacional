import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { getUserInfo } from '../../api/utils';
import QuestionAnswerField from '../../components/QuestionAnswerField';
import createAxiosInstance from "../../api";
import style from '../QuestionScreen/style';
import { capitalize } from '../../components/utils';
import Spinner from 'react-native-loading-spinner-overlay';

function QuestionScreen() {
    
    const [question, setQuestion] = useState({});
    const [nome, setNome] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const questionId=2;

    useEffect(async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const user = getUserInfo(token);
        setNome(capitalize(user.name));
    })

    useEffect(() => {
       async function getQuestion () {
           if (isLoading) {
                const axios = await createAxiosInstance();
                axios.get(`/question/${questionId}`).then(res => {
                    var data = res.data;
                    setQuestion(data);
                    setIsLoading(false);
                }).catch(()=>{
                    console.log("Não foi possível encontrar a pergunta.");
                })  
            }
       }
        getQuestion();
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
            <Spinner
                visible={isLoading}
                textContent={'Carregando...'}
            />
            {question.options &&
                <View>
                    <View style={style.question}>
                        <Text style={style.questionText}>{question.prompt}</Text>
                    </View>
                    <View style={style.answerQuestion}>
                        {question.options.map((option) => <QuestionAnswerField key={option.id} option={option} answer={question.answerId}/> )}
                    </View>
                </View>
            }
        </View>
    )
}
export default QuestionScreen;