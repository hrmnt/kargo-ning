import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import avatar from "../../assets/images/avatar.png";
import arrow from "../../assets/images/arrow.png";
import StarRating from 'react-native-star-rating';


const UserProfile = props =>{
    return (
       <View style={styles.row}>
            <View style={styles.profileInfo}>
            <Image style={[styles.profileImage,props.imageStyle]} source={avatar} />
            <View style={styles.infoWrap}>
                <Text style={[styles.name,props.textStyle]}>
                    {props.user.last_name} {props.user.first_name}
                </Text>
                <StarRating
                containerStyle={{width:"55%"}}
                    disabled={true}
                    maxStars={5}
                    rating={props.user.rating && props.user.rating}
                    fullStarColor="#FFD800"
                    starSize={props.starSize}
                />
           </View>
           </View>
       </View>
    )
   
}

const styles = StyleSheet.create({
    row:{
        paddingHorizontal:15,
        flexDirection:"row",
        paddingVertical:10,
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        marginBottom:5
    },
    profileInfo:{
        flexDirection:"row",
        alignItems:"center",
    },  
    profileImage:{
        height:30,
        width:30,
        marginRight:10
    },
    name:{
        fontSize:14,
        marginBottom:5
    },
    companyName:{
        fontSize:10,
        color:"#2F7CFF"
    },
    arrow:{
        height:20,
        width:8      
    }
})

export default UserProfile;