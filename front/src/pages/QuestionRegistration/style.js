import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff",
    },
    pageTitle: {
        color: "#0C066B",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 25,
        marginTop: 30,
        marginBottom: 35,
    },
    viewBox: {
        width: "90%",
        borderColor: "#c4c4c4",
        borderWidth: 0.2,
        shadowColor: "#c4c4c4",
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        height: "85%",
        marginTop: "auto",
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
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
        backgroundColor: "#42AB11",
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
