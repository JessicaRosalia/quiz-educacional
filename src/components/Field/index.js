import React, {useState} from 'react';
import { Button, Image, Text, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import style from './style';
import eye from '../../assets/icons/btn-verSenha.png';
import {Ionicons} from 'react-native-vector-icons/Ionicons';


const Field = ({label, placeholder, keyboardType}) => {
    const [input, setInput] = useState('');

    let isTrue = label === "Senha" ? true : false
    return (
        <View style={style.container}>
            <Text style={style.label}>{label}</Text>
            {!isTrue 
            ? <TextInput
                placeholder={placeholder}
                placeholderTextColor="#B1B1B1"
                keyboardType={keyboardType}
                style={style.textInput}
                value={input}
                onChangeText={(text)=>{setInput(text)}}
            />
            : <View style={style.containerPassword}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#B1B1B1"
                    keyboardType={keyboardType}
                    style={style.textInputPassword}
                    value={input}
                    onChangeText={(text) => { setInput(text) }}
                />

                <View style={style.visiblePassword}>
                    <TouchableOpacity>
                        <Image source={eye}/>
                    </TouchableOpacity>
                </View>
            </View> }
                 
            

        </View>
    )
}

export default Field;