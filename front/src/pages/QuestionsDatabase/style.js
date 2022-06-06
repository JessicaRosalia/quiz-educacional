import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: "100%",
    },
    listCards: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    listCardsEmpty: {
        color: "#404040",
        width: "80%",
        lineHeight: 24,
        fontWeight: "700",
        fontSize: 20,
        textAlign: "center",
    }, 
    registerButton: {
        position: "absolute",
        top: 600,
        right: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0C066B",
        resizeMode: "contain",
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    registerText: {
        color: "#fff",
        textAlign: "center",
        lineHeight: 50,
        fontSize: 40,
    },


    outerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 35,
        width: 200,
        alignItems: 'center'
    }
})
