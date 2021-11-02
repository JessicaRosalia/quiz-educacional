import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    Container: {
        backgroundColor: "#F6FBFF",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    ViewBox: { 
        width: 350,
        backgroundColor:"#fff",
        alignItems:"center",
        borderRadius:20,
        paddingLeft: 20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:30,
        marginBottom:30,
    },    
    TabNav:{
        marginBottom:50,  
    },
    input: {
        width: "100%",
        marginBottom: 10,
    },
    linkSenha: {
        textAlign: "right",
        fontSize: 13,
        textDecorationLine: "underline",
        justifyContent: "space-around",
        marginLeft: "62%",
        marginBottom:44,
    },    
    containerButton: {
        backgroundColor: '#0C066B',
        width: 200,
        height: 54,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    },
    enterText: {
        color: '#fff',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: 16,
    },
    linkCadastro: {
        color: "#000",
        fontSize: 16,
        marginBottom:20,
    },
    Barra:{
        marginBottom:30,
    },
    textoCad:{
        color: "#0C066B",
        fontSize: 16,
        fontWeight:'bold',
        textDecorationLine: "underline",  
    }, 

});
