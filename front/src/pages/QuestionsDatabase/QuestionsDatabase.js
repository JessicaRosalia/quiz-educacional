import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getQuestion, getQuestions, postQuestion } from '../../api/utils';
import { TouchableHighlight } from 'react-native';
import style from './style';
import { Header, SearchBar } from 'react-native-elements';
import backIcon from "../../assets/icons/btn-voltar.svg";
const QuestionsDatabase = () => {
    const [questionList, setQuestionList] = useState();
    const [question, setQuestion] = useState();
    const [search, setSearch] = useState("");
        
     useEffect(()=>{
        getQuestions().then(question=>{
            setQuestion({...question, question});
        }).catch(()=>{
            console.log("Por algum motivo a lista não pôde ser exibida.");
        })
    },[]);

    return (
        <View style={style.container}>
            <View style={style.viewBox}>
                <Header
                    containerStyle={{
                        backgroundColor: "#f6f6f6",
                    }}
                    leftComponent={{
                        icon: 'menu',
                        color: "#0C066B"
                    }}
                    centerComponent={{
                        text: "Meu banco de Questões",
                        style: style.titleHeader,
                    }}
                />
                <ScrollView>
                    <SearchBar
                        placeholder="Pesquise aqui"
                        containerStyle={{
                            width: 315,
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor: "#fff",
                            borderRadius: 7,
                            borderTopWidth: 0,
                            borderBottomWidth: 0
                        }}
                        inputContainerStyle={{
                            backgroundColor: "#fff",
                        }}
                        round
                        autoCorrect={false}
                        value={search}
                        onChangeText={(text)=>setSearch(text)}
                    />
                    <View style={style.questionCard}>
                        <Text>{question?.prompt}</Text> 
                        <TouchableHighlight style={style.registerButton}><Text style={style.registerText}>Cadastrar nova pergunta</Text></TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </View>
            
            
    );
};

export default QuestionsDatabase;