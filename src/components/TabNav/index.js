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
                ? <View>
                    <Text style={style.textBtnActivity}>Login</Text>
                    <View style={style.marked}/>
                </View>
                : <View>
                    <Text style={style.textBtnSecundary}>Login</Text>
                  </View>
             
            }
                
            </TouchableOpacity>
            
            
            <TouchableOpacity style={style.btnCadastro} activeOpacity={1} onPress={()=>{pageIsLoginNow !== true ? setPageIsCadNow(true) & setPageIsLoginNow(false) : setPageIsCadNow(true) & setPageIsLoginNow(false)}}>
                {pageIsCadNow === true
                    ? <View>
                        <Text style={style.textBtnActivity}>Cadastro</Text>
                        <View style={style.marked} />
                     </View>
                    : <Text style={style.textBtnSecundary}>Cadastro</Text>
                }
            </TouchableOpacity>
        </View>
        
    )
    
}

export default TabNav;