import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert, SafeAreaView, Text, View, TouchableOpacity, Modal, FlatList} from 'react-native';
import { deleteQuestion, getQuestions } from '../../api/utils';
import style from './style';
import backIcon from "../../assets/icons/btn-voltar.svg";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import QuestionsCard from '../../components/QuestionsCard';
import QuestionRegistration from '../QuestionRegistration/QuestionRegistration';
import { ScrollView } from 'react-native-gesture-handler';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DisciplineCard from '../../components/DisciplineCard';
import Toast from 'react-native-root-toast';


const QuestionsDatabase = ({navigation}) => {

    const isMounted = useRef(true);
    useEffect(() => () => { isMounted.current = false }, [isMounted])

    const handleFilteredQuestions = (questions) => {
        if(questions){
            setFilteredQuestions(questions);
        }else{
            setFilteredQuestions(null);
        }
    }

    
    const [questionList, setQuestionList] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState(questionList);
    const [searchText, setSearchText] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [questionSelected, setQuestionSelected] = useState(false);

    useEffect(()=> {
        setFilteredQuestions(questionList);
    }, [questionList]);
    
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
    },[]);

    async function removeQuestion (question) {
        const userId = question.userId;
        const questionId = question.questionId;
        const questionTmp = {
            userId: userId,
            questionId: questionId,
        }
        await deleteQuestion(questionTmp).then(()=> {
            Toast.show("A questão foi excluída!", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
            });
        }).catch(error => {
            Toast.show(error.response.data, {
                duration: Toast.durations.SHORT,
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
                    {filteredQuestions ? 
                        (<ScrollView>
                            {filteredQuestions.filter(filterSearch).map((item, index) => (
                                <QuestionsCard
                                    key={index}
                                    id={item.id}
                                    data={item}
                                    handleLeft={() => {OpenEditModal(item)}}
                                    handleRight={() => removeQuestion(item)}
                                />
                            ))}
                        </ScrollView>)
                        :
                        <Text style={style.listCardsEmpty}>Nenhuma questão foi encontrada.</Text>
                    }
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