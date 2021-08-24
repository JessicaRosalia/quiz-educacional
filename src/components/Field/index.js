import React, {useState} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import style from './style';
import eyeShowPassword from '../../assets/icons/btn-verSenha.png';
import eyeHidePassword from '../../assets/icons/btn-ocultarSenha.png';



const Field = ({label, placeholder, keyboardType}) => {

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

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
                    secureTextEntry={hidePass}
                />

                <View style={style.visiblePassword}>
                    <TouchableOpacity onPress={ () => setHidePass(!hidePass)}>
                        {
                            hidePass ?
                                <Image source={eyeHidePassword}/>
                            :
                                <Image source={eyeShowPassword} />
                            }
                    </TouchableOpacity>
                </View>
            </View> }
                 
            

        </View>
    )
}

export default Field;