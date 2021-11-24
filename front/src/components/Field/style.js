import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: 34,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    textInputPassword: {
        width: "96%",
        color: "#000",
        paddingLeft: 15,
        borderBottomColor: "#D3D3D3",
    },
    visiblePassword: {
        width: "12%",
        position: "absolute",
        right: 20,
        borderBottomColor: "#D3D3D3",
        paddingTop: 20,
        paddingBottom: 5,
    }
})

export default style;