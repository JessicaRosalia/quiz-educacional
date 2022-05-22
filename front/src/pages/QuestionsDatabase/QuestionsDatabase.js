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
    const [questionSelected, setQuestionSelected] = useState(false);

    useEffect(()=>{
        getQuestions().then(questions=>{
            if(questions){
                const list = questions.map((question)=>{
                    return {userId: question.userId, questionId: question.id, selectedValue: question.selectedValue, description: question.prompt, alternativeA: question.options[0].body, alternativeB: question.options[1]?.body, alternativeC: question.options[2]?.body, alternativeD: question.options[3]?.body, answer: question.answerId};
                })
                setQuestionList([...list])
            }
        }).catch(()=>{
            Alert.alert("Por algum motivo a lista não pôde ser exibida. Tente novamente!");
        })
    },[]);

    {/*const edittQuestion = async () => {
        await editQuestion(questionEd).then(()=> {
            console.log("editou");
        }).catch(error => console.log("erroooo", error))
    }*/}

    async function removeQuestion (question) {
        const userId = question.userId;
        const questionId = question.questionId;
        const questionTmp = {
            userId: userId,
            questionId: 2
        }
        // const ttt = JSON.stringify(questionTmp);
        // console.log("h", ttt);
        // console.log("sedsds", userId, questionId, questionTmp)
        await deleteQuestion(questionTmp).then(()=> {
            console.log("apagou");
        }).catch(error => console.log("erroooo", error.response.data))

        // const r = await axios.delete(`/question`, questionTmp, {
        // });
        
    }

    const openModalRegister = () => {
        setQuestionSelected(false);
        setModalIsVisible(true);

    }
    
    const OpenEditModal = (question) => {
        setQuestionSelected(question);
        setModalIsVisible(true);
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
                                handleLeft={() => {OpenEditModal(item)}}
                                handleRight={() => removeQuestion(item)}
                            />
                        ) }
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => openModalRegister()}
                    style={style.registerButton}
                >
                    <Text style={style.registerText}>+</Text>
                </TouchableOpacity>
                {modalIsVisible &&       
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalIsVisible}
                        onRequestClose={() => setModalIsVisible(!modalIsVisible)}
                    >
                        <QuestionRegistration questionSelected={questionSelected}/>   
                    </Modal>   
                }
            </View>
        </SafeAreaView>    
    );
};

export default QuestionsDatabase;