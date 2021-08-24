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
        alignItems: "center",
    },
    textInputPassword: {
        width: "90%",
        color: "#000",
        paddingLeft: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 1,
        borderBottomColor: "#D3D3D3",
        
    },
    visiblePassword: {
        width: "10%",
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 5,
    }
})

export default style;