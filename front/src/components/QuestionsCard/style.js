import { StyleSheet } from "react-native";

export default StyleSheet.create({
    questionCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 315,
        marginBottom: 20,
        backgroundColor: "#fff",
        height: 105,
        borderRadius: 7,
        shadowColor: "black",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    questionDdescription: {
        color: "#151515",
        fontSize: 17,
        marginBottom: 10,
    },
    leftAction: {
        backgroundColor: "#c4c4c4",
        justifyContent: "center",
        flex: 1,
        alignItems: "flex-start",
        height: 105,
    },
    rightAction: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        flex: 1,
        height: 105,
    },
})


