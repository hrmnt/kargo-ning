import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import ContactListItem from "../ContactListItem";




class ContactList extends Component{
    state={
        numberOfLines:4
    }

    onShow = () =>{
        this.setState({
            numberOfLines:1000
        })
    }


    render(){
        return (
            <View style={[styles.accordion,this.props.style]}>
                <View style={styles.row}>
                    <Image resizeMode="contain" style={styles.icon} source={this.props.image} />
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.list}>
                    {
                        this.props.contactList.map(item => {
                            <ContactListItem item={item} />

                        }) 
                    }
                </View>
            </View>
            )
    }
    
   
}

const styles = StyleSheet.create({
    accordion:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:"#fff"
        
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15
    },
    icon:{
        width:15,
        height:15,
        marginRight:5
    },
    list:{
        flex:1
    }
})

export default ContactList