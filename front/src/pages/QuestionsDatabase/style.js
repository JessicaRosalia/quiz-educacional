import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerCards: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    questionCard: {
        width: 315,
        marginTop: 20,
        padding: 5,
        backgroundColor: "#fff",
        height: 105,
        borderRadius: 7,
        shadowColor: "black",
    },
    descriptionCard: {
        color: "#151515",
        fontSize: 17,
        marginBottom: 10,
    },
    answerCard: {
        color: "#151515",
        fontSize: 15,
    },
    registerButton: {
        backgroundColor: "#0f0",
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    registerText: {
        textAlign: "center",
        lineHeight: 75,
        fontSize: 40,
    }
})
