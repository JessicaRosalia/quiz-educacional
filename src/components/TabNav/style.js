import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    containerTabNav: {
        display: "flex",
        flexDirection: "row",
    },
    btnLogin: {
        width: 134,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,

    },
    textBtnActivity:{
        color: "#0C066B",
        fontSize:25,
        fontWeight: "bold",
        textAlign: "center"
    },
    textBtnSecundary: {
        color: "rgb(12,6,107)",
        opacity: 0.5,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
    btnCadastro: {
        width: 134,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    marked: {
        backgroundColor: "#FFEA21",
        height: 4,
        width: 134,
    },
    noMarked: {
        backgroundColor: "#FFEA21",
        opacity: 0.2,
        height: 5,
        width: 134,

    }

})


export default style;