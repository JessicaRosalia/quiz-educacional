import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    containerCard: {
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        elevation: 4,
        width: 145,
        height: 160,
        paddingLeft: 5,
    },
    imageCard: {
        marginBottom: 10,
    },
    titleCard: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#0C066B",
        marginBottom: 2,
        maxWidth: 120,
    },
    subtitleCard: {
        fontSize: 15,
        color: "#0C066B",
        maxWidth: 140,
        width: 135,
    }
})

export default style;