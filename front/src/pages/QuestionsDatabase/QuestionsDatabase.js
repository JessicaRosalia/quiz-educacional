import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getQuestions } from '../../api/utils';
import { TouchableHighlight } from 'react-native';
import style from './style';
import backIcon from "../../assets/icons/btn-voltar.svg";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
const QuestionsDatabase = ({navigation}) => {
    const [questionList, setQuestionList] = useState();
        
     useEffect(()=>{
        getQuestions().then(questions=>{
            if(questions){
                const list = questions.map((question)=>{
                    return {descricao: question.prompt, resposta: question.answerId};
                })
                setQuestionList([...list])
            }
        }).catch((e)=>{
            console.log(e, "Por algum motivo a lista não pôde ser exibida. Tente novamente!");
        })
    },[]);

    return (
        <View style={style.container}>
            <View style={style.viewBox}>
                <Header/>
                <ScrollView>
                    <SearchBar/>
                    <View style={style.containerCards}>
                            {questionList?.map((question, index)=>{
                                return (
                                    <View style={style.questionCard} key={index}>
                                        <Text style={style.descriptionCard}>{question.descricao}</Text>     
                                        <Text style={style.answerCard}>Resposta correta: {question.resposta}</Text> 
                                    </View>
                                )
                            })}   
                    </View>
                    <TouchableHighlight onPress={() => navigation.navigate("QuestionRegistration") } style={style.registerButton}><Text style={style.registerText}>+</Text></TouchableHighlight>
                </ScrollView>
            </View>
        </View>
            
            
    );
};

export default QuestionsDatabase;