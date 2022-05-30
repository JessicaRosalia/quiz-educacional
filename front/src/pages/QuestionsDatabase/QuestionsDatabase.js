import React, { useEffect, useRef, useState } from 'react';
import { Alert, SafeAreaView, Text, View, TouchableOpacity, Modal, FlatList} from 'react-native';
import { deleteQuestion, getQuestions } from '../../api/utils';
import style from './style';
import backIcon from "../../assets/icons/btn-voltar.svg";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import QuestionsCard from '../../components/QuestionsCard';
import QuestionRegistration from '../QuestionRegistration/QuestionRegistration';
import { ScrollView } from 'react-native-gesture-handler';
const QuestionsDatabase = ({navigation}) => {

    const isMounted = useRef(true);
    useEffect(() => () => { isMounted.current = false }, [isMounted])
    
    const [questionList, setQuestionList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [questionSelected, setQuestionSelected] = useState(false);
    
    const filterSearch = (searchValue) => {
        if(searchText === ""){
            return searchValue;
        }else if(searchValue.description.includes(searchText)){
            return searchValue;
        }
    }

    useEffect(()=>{
        getQuestions().then(questions=>{
            if(questions){
                const list = questions.map((question)=>{
                    return {userId: question.userId, questionId: question.id, selectedValue: question.category, description: question.prompt, alternativeA: {id: question.options[0].id, text: question.options[0]?.body}, alternativeB: {id: question.options[1]?.id, text: question.options[1]?.body}, alternativeC: {id: question.options[2]?.id, text: question.options[2]?.body}, alternativeD: {id: question.options[3]?.id, text: question.options[3]?.body}, answerId: question.answerId, questionCategoryId: question.questionCategoryId};
                })
                setQuestionList([...list])
            }
        }).catch(()=>{
            return <Text>Ops! Por algum motivo a lista não pôde ser exibida. Tente novamente!</Text>
        })
    },[questionList]);

    async function removeQuestion (question) {
        const userId = question.userId;
        const questionId = question.questionId;
        const questionTmp = {
            userId: userId,
            questionId: questionId,
        }
        await deleteQuestion(questionTmp).then(()=> {
            console.log("apagou");
        }).catch(error => console.log("erroooo", error.response.data))   
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
                <Header navigation={navigation}/>
                <SearchBar searchText={searchText} setSearchText={setSearchText}/>
                <ScrollView>
                <View style={style.listCards}>
                    {
                    questionList ?
                    questionList.filter(filterSearch).map((item, index) => (
                        <QuestionsCard
                            key={index}
                            id={item.id}
                            data={item}
                            handleLeft={() => {OpenEditModal(item)}}
                            handleRight={() => removeQuestion(item)}
                        />
                    )) :
                <View>
                    <Text>Você não possui nenhuma questão cadastrada ainda.</Text>
                </View>
                }
                </View>
                </ScrollView>
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