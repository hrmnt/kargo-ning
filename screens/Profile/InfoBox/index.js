import React from "react";
import { View, Text,StyleSheet,Image } from "react-native";

const InfoBox = props => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Image  resizeMode="contain" style={styles.image} source={props.image}></Image>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <Text style={styles.description}>
                {props.description}
            </Text>
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
        marginBottom:5
    },  
    title:{
        fontSize:16
    },
    description:{
        fontSize:16,
        color:"rgba(0,0,0,0.7)"
    }
})

export default InfoBox;