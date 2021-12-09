import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({


    meio:{
        marginTop: 0,
        backgroundColor: "#757575",
        height: "100%"
    },

    FormContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        //marginTop:30,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },

    Form:{

        width:"100%",
        height:"auto",
        marginTop:40,
        padding:10

    },
    FormLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    FormInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:55,
        margin: 12,
        paddingLeft: 10
    },
    ButtonLogin:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        //backgroundColor:"#ff0043",
        backgroundColor:'#009ADA',
        paddingTop:20,
        paddingBottom:14,
        marginTop:14,
        marginLeft:12,
        marginBottom:5,

    },
    ButtonRegister:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#66A64F",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
    },
    textbuttonLogin:{
        fontSize:20,
        color: "#ffffff",
    },
    textErro:{
        color:"#FF0000",
    },
    ViewImagem: {
        width: 400, 
        height: 400,
        backgroundColor:"beige",
        borderWidth: 2, 
        marginBottom: 20,
        //flex: 0.3,
    },
    imagem: {
        width: 400, 
        height: 400,
        resizeMode: 'stretch'
    }


});

export default styles