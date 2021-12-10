import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";

function QuestionAnswerField({answerText}) {
    return (
        <TouchableOpacity style={style.button}>
            <Text style={style.textButton}>{answerText}</Text>
        </TouchableOpacity>
    )
}
export default QuestionAnswerField;