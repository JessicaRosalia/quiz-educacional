import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View , ScrollView, TouchableOpacity, Modal, FlatList} from 'react-native';
import { getQuestions } from '../../api/utils';
import style from './style';
import backIcon from "../../assets/icons/btn-voltar.svg";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import QuestionsCard from '../../components/QuestionsCard';
import QuestionRegistration from '../QuestionRegistration/QuestionRegistration';
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
            <View style={style.container}>
                <Header />
                <SearchBar />
                <View style={style.listCards}>
                    <FlatList
                        data={questionList}
                        keyExtractor={(item, index) => index}
                        renderItem={({item})=> (
                            <QuestionsCard
                                id={item.id}
                                data={item}
                                handleLeft={()=>alert("editar")}
                                handleRight={()=>alert("excluir")}
                            />
                        ) }
                    />
                </View>
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
            </View>
        </SafeAreaView>    
    );
};

export default QuestionsDatabase;