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
        borderBottomColor: "#E7A21C",
    },
    infoMatch: {
        display: "flex",
        alignItems: "center",
    },
    area: {
        color: "#0C066B",
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
        color:"#0C066B" ,
        fontWeight: "700",
        fontSize: 22,
    },
    answerQuestion: {
        display: "flex",
        alignItems: "center",
    },

})