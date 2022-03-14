import React, { useEffect, useRef, useState } from 'react';
import { Alert, SafeAreaView, Text, View , ScrollView, TouchableOpacity, Modal} from 'react-native';
import { getQuestions } from '../../api/utils';
import style from './style';
import backIcon from "../../assets/icons/btn-voltar.svg";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import QuestionsCard from '../../components/QuestionsCard';
import  {Modalize}  from  'react-native-modalize' ;
import QuestionRegistration from '../QuestionRegistration/QuestionRegistration';
import { FAB } from 'react-native-elements';
const QuestionsDatabase = ({navigation}) => {
    const [questionList, setQuestionList] = useState();

    const [modalIsVisible, setModalIsVisible] = useState(false);

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
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={() => setModalIsVisible(true)}
                                style={style.registerButton}
                            >
                                <Text style={style.registerText}>+</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType='slide'
                                transparent={true}
                                visible={modalIsVisible}
                                onRequestClose={() => {setModalIsVisible(!modalIsVisible)}}
                            >
                                <QuestionRegistration/>
                            </Modal>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>    
    );
};

export default QuestionsDatabase;