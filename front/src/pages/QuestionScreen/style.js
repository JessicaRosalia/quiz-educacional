import { StyleSheet } from "react-native";

export default StyleSheet.create({
    questionScreenHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#0C066B",
    },
    infoMatch: {
        display: "flex",
        alignItems: "center",
    },
    area: {
        fontWeight: "700",
        fontSize: 16,
        marginTop: 10,
    },
    question: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 90,
        
    },
    questionText: {
        fontWeight: "700",
        fontSize: 20,
    },
    answerQuestion: {
        display: "flex",
        alignItems: "center",
    },

})