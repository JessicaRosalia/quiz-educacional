import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View , ScrollView, TouchableOpacity, Modal, FlatList} from 'react-native';
import { deleteQuestion, editQuestion, getQuestions } from '../../api/utils';
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

    const questionD = {
        userId: 1,
        questionId: 0,
    }

    const questionEd = {
        prompt: "Isso é uma quarta pergunta",
        options: [
          {
            body: "Opção 1",
            answer: true
          },
          {
            body: "Opção 2",
            answer: false
          },
          {
            body: "Opção 3",
            answer: false
          },
          {
            body: "Opção 4",
            answer: false
          }
        ],
        userId: 1,
        questionId: 1,
        questionCategoryId: 1
      }

    const redirectToQuestionR = (questionSelected) => {

        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalIsVisible}
                onRequestClose={() => {setModalIsVisible(!modalIsVisible)}}
            >
                <QuestionRegistration questionSelected={questionSelected}/>
            </Modal>
        )
        
    }

    {/*const edittQuestion = async () => {
        await editQuestion(questionEd).then(()=> {
            console.log("editou");
        }).catch(error => console.log("erroooo", error))
    }*/}

    const deleteeQuestion = async () => {
        await deleteQuestion(questionD).then(()=> {
            console.log("apagou");
        }).catch(error => console.log("erroooo", error))
    }

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
                                handleLeft={(item) => redirectToQuestionR(item)}
                                handleRight={(e) => deleteeQuestion(e)}
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