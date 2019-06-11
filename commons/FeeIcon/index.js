import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import fire from "../../assets/images/fire.png";




const FeeIcon = props =>{
    return (
        <View style={props.style}>
        <Image style={styles.feeImage} source={fire}></Image>
        <View style={styles.feeText}>
            <Text style={styles.fee}>{props.fee}%</Text>
        </View>
    </View>
    )
   
}

const styles = StyleSheet.create({
    feeText:{
        backgroundColor:"#FF0062",
        paddingHorizontal:8,
        paddingVertical:2,
        borderRadius:8,
        position:"absolute",
        left:22
    },
    fee:{
        fontSize:10,
        color:"#fff"
    },  
    feeImage:{
        height:26,
        width:26
    }
})

export default FeeIcon