import React,{Component} from "react";
import {Text, View, StyleSheet, TextInput}  from "react-native";

class Tags extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { text } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.tagText}>
                    #{text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight:3,
    },
    tagText: {
      fontSize: 10,
      color:"#2F7CFF",
      fontWeight:"normal"
    },
    inputContainer:{
        backgroundColor:"rgba(0,0,0,0.05)",
        height:40,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10
    },
    input:{
        flex:1,
        fontSize:15,
        color:"#c9c9c9"
    },
    search:{
        paddingRight:10,
        
    }
  });


export default Tags;