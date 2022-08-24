import { StyleSheet } from "react-native";

export default StyleSheet.create({
    questionCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 315,
        backgroundColor: "#fff",
        height: 105,
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 20,
        shadowColor: "#171717",
        borderBottomWidth: 0.6,
        borderBottomColor: "#ccc",
    },
    questionDescription: {
        color: "#151515",
        fontSize: 17,
        marginBottom: 10,
    },
    leftAction: {
        backgroundColor: "rgba(250, 162, 20, 0.8)",
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 1,
        height: 105,
    },
    rightAction: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 105,
        flex: 1,
    },
})


