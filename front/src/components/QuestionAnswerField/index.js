import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import style from './style';

function QuestionAnswerField({ option, setAnswer, correctAnswer, wrongAnswer }) {

    const buttonStyle = correctAnswer ? style.buttonCorrect : wrongAnswer ? style.buttonWrong : style.button;

    return (
        <TouchableOpacity style={buttonStyle} onPress={() => setAnswer(option.id)}>
            <Text style={style.textButton}>{option.body}</Text>
        </TouchableOpacity>
    )
}
export default QuestionAnswerField;