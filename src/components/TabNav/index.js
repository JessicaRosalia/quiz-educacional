import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from '../TabNav/style';

const TabNav = ({login, register}) => {
    const [pageIsCadNow, setPageIsCadNow] = useState(register);
    const [pageIsLoginNow, setPageIsLoginNow] = useState(login);
    return (
        <View style={style.containerTabNav}>

            <TouchableOpacity style={style.btnLogin} activeOpacity={1}
                onPress={() => { pageIsLoginNow === true ? setPageIsCadNow(false) & setPageIsLoginNow(true) : setPageIsCadNow(false) & setPageIsLoginNow(true) }}
            >
            { pageIsLoginNow === true 
                ? <Text style={style.textBtnActivity}>Login</Text>
                : <Text style={style.textBtnSecundary}>Login</Text>
            }
            </TouchableOpacity>
            
            
            <TouchableOpacity style={style.btnCadastro} activeOpacity={1} onPress={()=>{pageIsLoginNow !== true ? setPageIsCadNow(true) & setPageIsLoginNow(false) : setPageIsCadNow(true) & setPageIsLoginNow(false)}}>
                {pageIsCadNow === true
                    ? <Text style={style.textBtnActivity}>Cadastro</Text>
                    : <Text style={style.textBtnSecundary}>Cadastro</Text>
                }
            </TouchableOpacity>
        </View>
        
    )
    
}

export default TabNav;