import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#18191a",
        paddingTop: 20,
        justifyContent:"center",
        alignItems: "center",
        
    },
    Tasks: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5
    },
    deleteTask: {
        justifyContent:"center",
        paddingLeft:15,

    },
    DescriptionTask: {
        width:"100%",
        alignContent:"flex-start",
        backgroundColor:"#fff",
        padding:12,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight:15,
        color:"#000",
        fontSize: 20,
        textAlign: "center"
    },
    buttonNewTask: {
        width:60,
        height:60,
        position: "absolute",
        bottom:30,
        left:20,
        backgroundColor:"#F92e6a",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
    },
    iconButton: {
        color:"#ffffff",
        fontSize:20,
        fontWeight:"bold",
    },
    img: {
        width: 150, 
        height:150,
        marginBottom: 10,
    },
    nome: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 10,
    }
    
});

export default styles