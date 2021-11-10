import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    Container: {
        backgroundColor: "#f1f1f1",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },    
    ViewBox: { 
        width: "90%",
        backgroundColor:"#fff",
        alignItems:"center",
        borderRadius:20,
        paddingLeft: 10,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:30,
        height: "90%",
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    TabNav:{
        marginBottom:50,  
    },
    input: {
        width: "100%",
        marginBottom: 10,
        display: "flex",
        
        flexDirection: "column",
    
    },
    label: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    required: {
        color: "red",
    },
    ContainerButton: {
        backgroundColor: "#0C066B",
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
        display :"flex",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold",
    },


})


