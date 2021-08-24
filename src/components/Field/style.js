import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: 300,
        display: "flex",
    },
    label: {
        fontSize: 18,
    },
    textInput: {
        //backgroundColor: "#fff",
        color: "#000",
        paddingLeft: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 1,
        borderBottomColor: "#D3D3D3",
    },
    containerPassword: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
    },
    textInputPassword: {
        width: "85%",
        color: "#000",
        paddingLeft: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 1,
        borderBottomColor: "#D3D3D3",
    }
})

export default style;