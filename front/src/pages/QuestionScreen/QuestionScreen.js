import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { getUserInfo } from '../../api/utils';
import QuestionAnswerField from '../../components/QuestionAnswerField';
import createAxiosInstance from "../../api";
import style from '../QuestionScreen/style';
import { capitalize } from '../../components/utils';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-root-toast';

function QuestionScreen() {

    const [question, setQuestion] = useState({});
    const [usuario, setUsuario] = useState("");
    const [resposta, setResposta] = useState(null);
    const [respostaCorreta, setRespostaCorreta] = useState(null);
    const [acerto, setAcerto] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const questionId = 2;

    useEffect(async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const user = getUserInfo(token);
        setUsuario(user);
    })

    useEffect(() => {
        async function getQuestion() {
            if (isLoading) {
                const axios = await createAxiosInstance();
                axios.get(`/question/${questionId}`).then(res => {
                    const data = res.data;
                    setQuestion(data);
                    setIsLoading(false);
                }).catch(() => {
                    console.log("Não foi possível encontrar a pergunta.");
                })
            }
        }
        getQuestion();
    }, [])

    useEffect(async () => {
        if (resposta !== null && respostaCorreta === null) {
            setIsLoading(true);
            const axios = await createAxiosInstance();
            axios.post("/question/answer", {
                userId: usuario.id,
                questionId,
                optionId: resposta,
            }).then(res => {
                const { correct, correctOptionId } = res.data;
                setRespostaCorreta(correctOptionId);
                setAcerto(correct);
                setIsLoading(false);
            }).catch(error => {
                console.error(error);
                if (error.response) {
                    const errorMsg = error.response.data.message;
                    console.log(errorMsg);
                    Toast.show(capitalize(errorMsg), {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.CENTER,
                    });
                }
            })
        }

    }, [resposta])

    useEffect(() => {
        if (acerto === true) {
            Toast.show("RESPOSTA CORRETA!", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
            });
        } else if (acerto === false) {
            Toast.show("RESPOSTA ERRADA!", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
            });
        }
    }, [acerto])

    return (
        <View>
            <View style={style.questionScreenHeader}>
                <Text>{usuario.name}</Text>
                <View style={style.infoMatch}>
                    <Text>30 Segundos</Text>
                    <Text style={style.area}>História</Text>
                </View>
                <Text>Nome 2</Text>
            </View>
            <Spinner
                visible={isLoading}
                textContent='Carregando...'
                size="large"
                overlayColor="#000"
                color='#fff'
                textStyle={{ color: "#fff" }}
            />
            {question.options &&
                <View>
                    <View style={style.question}>
                        <Text style={style.questionText}>{question.prompt}</Text>
                    </View>
                    <View style={style.answerQuestion}>
                        {question.options.map((option) =>
                            <QuestionAnswerField
                                correctAnswer={respostaCorreta === option.id}
                                wrongAnswer={respostaCorreta !== null && resposta !== respostaCorreta && resposta === option.id}
                                key={option.id} option={option}
                                setAnswer={r => resposta === null && setResposta(r)}
                            />)}
                    </View>
                </View>
            }
        </View>
    )
}
export default QuestionScreen;