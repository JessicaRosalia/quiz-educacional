import React from "react";
import { Header as HeaderRN } from 'react-native-elements';
import style from "./style";

const Header = () => {
    return (
        <HeaderRN
            containerStyle={{
                backgroundColor: "#f6f6f6",
                paddingVertical: 20,
            }}
            leftComponent={{
                icon: 'menu',
                color: "#0C066B"
            }}
            centerComponent={{
                text: "Meu banco de Questões",
                style: style.titleHeader,
            }}
        />
    )
}
export default Header;