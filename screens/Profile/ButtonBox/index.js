import React from "react";
import { View, Text,StyleSheet,Image,TouchableOpacity } from "react-native";

const ButtonBox = props => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Image  resizeMode="contain" style={styles.image} source={props.image}></Image>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <TouchableOpacity onPress={ props.onPress} style={[styles.btn,props.boxStyle]}>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,0.05)"
    },
    image:{
        width:15,
        height:15,
        marginRight:5
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10
    },  
    title:{
        fontSize:16

    },
    description:{
        fontSize:14,
        color:"rgba(0,0,0,0.7)"
    },
    btn:{
        backgroundColor:"rgba(0,0,0,0.05)",
        padding:10,
        borderRadius:5
    }
})

export default ButtonBox;