import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Modal} from 'react-native';
import { deleteQuestion, getQuestions, getUserId } from '../../api/utils';
import style from './style';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import QuestionsCard from '../../components/QuestionsCard';
import QuestionRegistration from '../QuestionRegistration/QuestionRegistration';
import { ScrollView } from 'react-native-gesture-handler';
import DisciplineCard from '../../components/DisciplineCard';
import Toast from 'react-native-root-toast';


const QuestionsDatabase = ({navigation}) => {

    const [userId, setUserId] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [sizeFilterResult, setSizeFilterResult] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [questionSelected, setQuestionSelected] = useState(false);
    const [errorMessageListQuestions, setErrorMessageListQuestions] = useState(false);

    const filterSearch = (searchValue) => {
        if(searchText === ""){
            return searchValue;
        }else if(searchValue.description.includes(searchText)){
            return searchValue;
        }
    }

    const numberOfFilteredQuestions = filteredQuestions?.filter(filterSearch)?.length;

    useEffect( () => {
        getUserId().then((data) => setUserId(data.id)).catch((erro)=>console.log(erro, "Não foi possível recuperar o usuário logado."));
    }, []);

    useEffect(() => {
        getQuestions().then(questions=>{
            if(questions){
                const aux = questions.filter((question) => {
                    return question.userId == userId;
                }).map((question) => {
                    return {userId: question.userId, questionId: question.id, selectedValue: question.category, description: question.prompt, alternativeA: {id: question.options[0].id, text: question.options[0]?.body}, alternativeB: {id: question.options[1]?.id, text: question.options[1]?.body}, alternativeC: {id: question.options[2]?.id, text: question.options[2]?.body}, alternativeD: {id: question.options[3]?.id, text: question.options[3]?.body}, answerId: question.answerId, questionCategoryId: question.questionCategoryId};
                });
                setQuestionList(aux);
            }
        }).catch(()=>{
            setErrorMessageListQuestions("Ops! Por algum motivo a lista não pôde ser exibida. Tente novamente!");
        })
    },[userId, modalIsVisible]);

    useEffect(()=> {
        setFilteredQuestions(questionList);
    }, [questionList]);
    
    useEffect(() => {
            setSizeFilterResult(numberOfFilteredQuestions);
    }, [numberOfFilteredQuestions]);
    
    const handleFilteredQuestions = (filterResult) => {
        if(filterResult){
            setFilteredQuestions(filterResult);
        }else{
            setFilteredQuestions(null);
        }
    }

    function removeQuestion (question) {
        const userId = question.userId;
        const questionId = question.questionId;
        
        deleteQuestion({
            userId: userId,
            questionId: questionId,
        })
        .then(()=> {
            Toast.show("A questão foi excluída!", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
            });

            const remainingList = questionList.filter((question) => {
                if(question.questionId !== questionId) return question
            });

            setQuestionList(remainingList);
        }).catch(() => {
            Toast.show("Ocorreu um erro ao tentar excluir a questão. Tente novamente.", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
            });
        })
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
                <DisciplineCard questionList={questionList} handleFilteredQuestions={handleFilteredQuestions}/>
                <View style={style.listCards}>
                    {
                    questionList?.length > 0
                    ? (
                        errorMessageListQuestions ? (
                            <Text style={style.listCardsEmpty}>{errorMessageListQuestions}</Text>
                        ):( 
                            <View>
                                <Text style={style.resultsFound}>{sizeFilterResult == 1 ? "1 resultado encontrado" : `${sizeFilterResult} resultados encontrados`}</Text>
                                <ScrollView>
                                    {filteredQuestions && filteredQuestions?.filter(filterSearch).map((item, index) => (
                                        <QuestionsCard
                                            key={index}
                                            id={item.id}
                                            data={item}
                                            handleLeft={() => {OpenEditModal(item)}}
                                            handleRight={() => removeQuestion(item)}
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                        )
                        ) : (
                        <Text style={style.listCardsEmpty}>Você não possui nenhuma questão cadastrada.</Text>
                    )}
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
                        <QuestionRegistration questionSelected={questionSelected} setModalIsVisible={setModalIsVisible}/>   
                    </Modal>   
                }
            </View>
        </SafeAreaView>    
    );
};

export default QuestionsDatabase;