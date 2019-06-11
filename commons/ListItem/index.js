import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import fire from "../../assets/images/fire.png";




const ListItem = props =>{
    return (
        <View style={styles.listItem}>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <Text style={styles.price}>
                {props.price} ₸
            </Text>
        </View>
    )
   
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,0.05)"
    },
    name:{
        fontSize:14
    },  
    price:{
        fontSize:14,
        color:"#EF741C"
    }
})

export default ListItem