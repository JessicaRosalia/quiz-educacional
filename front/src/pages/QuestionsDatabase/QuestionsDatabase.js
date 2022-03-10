import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getQuestions } from '../../api/utils';
import style from './style';
import backIcon from "../../assets/icons/btn-voltar.svg";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import QuestionsCard from '../../components/QuestionsCard';
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
        }).catch(()=>{
            Alert.alert("Por algum motivo a lista não pôde ser exibida. Tente novamente!");
        })
    },[]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={style.container}>
                    <Header />
                    <ScrollView>
                        <SearchBar />
                        <QuestionsCard questionList={questionList} />
                        <View style={style.teste}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => navigation.navigate("QuestionRegistration") }
                            style={style.registerButton}
                        >
                            <Text style={style.registerText}>+</Text>
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>    
    );
};

export default QuestionsDatabase;