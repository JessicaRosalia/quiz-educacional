import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import Label from '../Label/index.js';
import style from './style.js';

const InputText = ({label, placeholder, onChangeValue, errorMessage}) => {

    return (
        <View style={style.input}>
            <Label label={label} required={true}/>
            <Input placeholder={placeholder} keyboardType="default" selectionColor={"#c3c3c3"} placeholderTextColor="#c3c3c3" onChangeText={value => onChangeValue(value)} errorMessage={errorMessage} errorStyle={{ color: "red" }} style={{ color: "#000", fontSize: 15 }} />
        </View>
    )
}
export default InputText;