import React from 'react';
import { Text, View } from 'react-native';
import QuestionAnswerField from '../../components/QuestionAnswerField';
import style from '../QuestionScreen/style';

function QuestionScreen() {
    return (
        <View>
            <View style={style.questionScreenHeader}>
                <Text>Nome 1</Text>
                <View style={style.infoMatch}>
                    <Text>Tempo Aqui</Text>
                    <Text>Área</Text>
                </View>
                <Text>Nome 2</Text>
                
            </View>
            <View style={style.answerQuestion}>
                <Text>PERGUNTA AQUI</Text>
            </View>
            <View>
                <QuestionAnswerField answerText="Resposta1"/>
                <QuestionAnswerField answerText="Resposta2"/>
                <QuestionAnswerField answerText="Resposta3"/>
                <QuestionAnswerField answerText="Resposta4"/>
            </View>
        </View>
        
    )
}
export default QuestionScreen;