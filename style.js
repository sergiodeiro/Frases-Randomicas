import {StyleSheet} from 'react-native'

export default StyleSheet.create({
     /* ETAPA 1 DE FLEX
     container:{
         //Background completo
         flex:1,
         height:300,
         backgroundColor:'skyblue',
         //flex-start or flex-end // space-around// space-between / center
         justifyContent:'space-around',
         alignItems: 'stretch',
         flexDirection: 'column'
     }*/
    /* ETAPA 2 DE FLEX COM TOPO E RODAPE  
    principal:{
         flex:1,//1:1
         backgroundColor: 'cornflowerblue'
     },
    topo:{
         flex:2,//8:11
         backgroundColor: 'brown',
         height:400,
     },
     conteudo:{
         flex:8, //1:11
         backgroundColor: 'orangered'
     },
     rodape:{
        flex:1,
        backgroundColor: 'yellowgreen'
    }*/
    principal:{
    //Deixa o FLEX NO CENTRO // FICA NO MEIO 
      backgroundColor:'#8a05be',
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
        backgroundColor:'green',
        paddingVertical:10,
        paddingHorizontal: 40,
        marginTop:20

    },
    buttonFrase:{
        color: 'white',
        fontSize:20,
        fontWeight:'bold'
    }
    /*button:{
        backgroundColor:"#8a05be",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.4,
    },
    buttonText:{
        fontSize: 22,
        color: 'white',
        fontWeight:'bold',
        textAlign:'center' //or AlignSelf
    }*/
  });