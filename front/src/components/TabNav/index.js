import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from '../TabNav/style';

const TabNav = ({login, register, page}) => {
    
    const [pageIsCadNow, setPageIsCadNow] = useState(register);
    const [pageIsLoginNow, setPageIsLoginNow] = useState(login);

    function handleLoginButton() {
        page.navigate('Login') && (setPageIsCadNow(false) && setPageIsLoginNow(true))
    }

    function handleRegisterButton() {
        if(page.navigate('TeacherRegistration')){
            setPageIsCadNow(true) && setPageIsLoginNow(false);
        }
    }

    return (
        <View style={style.containerTabNav}>
            <TouchableOpacity style={style.btnLogin} activeOpacity={1}
                onPress={() => handleLoginButton() }
            >
            { pageIsLoginNow === true 
                ? <View>
                    <Text style={style.textBtnActivity}>Login</Text>
                    <View style={style.marked}/>
                </View>
                : <View>
                    <Text style={style.textBtnSecundary}>Login</Text>
                    <View style={style.noMarked} />
                  </View>
             
            }
                
            </TouchableOpacity>
            
            <View>
            <TouchableOpacity style={style.btnCadastro} activeOpacity={1} onPress={()=>{handleRegisterButton()}}>
                {pageIsCadNow === true
                    ? <View>
                        <Text style={style.textBtnActivity}>Cadastro</Text>
                        <View style={style.marked} />
                     </View>
                    : <View>
                        <Text style={style.textBtnSecundary}>Cadastro</Text>
                        <View style={style.noMarked} />
                     </View>
                }
            </TouchableOpacity>
            
            </View>
        </View>
        
    )
    
}

export default TabNav;