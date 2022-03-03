import React, { useState } from 'react';
import { View } from 'react-native';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Select from '../../components/Select';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const QuestionRegistration = () => {
    const [checked, setChecked] = useState('a');

    return (
        <View>
            <ScrollView>
                <Label label={"Matéria"} required={true}/>
                <Select/>
                <InputText label={"Pergunta"} required={true} placeholder={"Informe o enunciado da pergunta"} />
                <Label label={"Alternativas de resposta"} required={false}/>
                <InputText label={"Alternativa A"} placeholder={"Informe o texto da alternativa A"} />
                <InputText label={"Alternativa B"} placeholder={"Informe o texto da alternativa B"} />
                <InputText label={"Alternativa C"} placeholder={"Informe o texto da alternativa C"} />
                <InputText label={"Alternativa D"} placeholder={"Informe o texto da alternativa D"} />
            </ScrollView>
        </View>
            
            
    );
};

export default QuestionRegistration;