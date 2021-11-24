import React, {useEffect, useState} from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import style from './style';
import eyeShowPassword from '../../assets/icons/btn-verSenha.png';
import eyeHidePassword from '../../assets/icons/btn-ocultarSenha.png';



const Field = ({label, placeholder, keyboardType, senhaa}) => {

  
    const [hidePass, setHidePass] = useState(true);
    const [ senha, setSenha] = useState(senhaa);
    const [error, setError] = useState(false);
    
    let validaar = validar
    validaar()
    
    /*useEffect(() => {
            if(input === ''){
                
            }else{

            }
    }, [input] ) */



    let labelPassIsTrue = label === "Senha" ? true : false
    return (
        <View style={style.container}>
            <View style={style.textInputPassword}>
                <Input label="Senha" labelStyle={{color: '#000'}} placeholder="Sua senha" keyboardType="default" placeholderTextColor="#c3c3c3" onChangeText={value=>setSenha(value)} secureTextEntry={true} errorMessage={error} style={{color: "#000", fontSize: 15 }}/>
            </View>
                
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
        </View>
    )
}

export default Field;