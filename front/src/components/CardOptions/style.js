import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    containerCard: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        elevation: 4,
        width: 145,
        height: 160,
        paddingLeft: 4,
        paddingRight: 4,
    },
    imageCard: {
        marginBottom: 10,
    },
    titleCard: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#0C066B",
        marginBottom: 2,
    },
    subtitleCard: {
        fontSize: 15,
        color: "#0C066B",
        textAlign: "center",
    }
})

export default style;