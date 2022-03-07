import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerRegisterQuestion: {
        backgroundColor: "#f1f1f1",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    viewBox: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 30,
        height: "90%",
    },
    subject: {
        marginBottom: 30,
    },
    questionDescription:{
        marginBottom: 15,
    },
    headerAlternatives: {
        marginLeft: 10,
        marginBottom: 20,
        fontSize: 16.5,
    },
    registerButton: {
        backgroundColor: "#39980C",
        width: "95%",
        height: 54,
        borderRadius: 7,
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    registerText: {
            color: "#fff",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: "bold",
    }
})
