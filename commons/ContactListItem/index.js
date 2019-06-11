import React,{Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import fire from "../../assets/images/fire.png";




class ContactListItem extends Component{
    state ={
        isActive:false
    }

    show = () =>{
        this.setState({
            isActive:true
        })
    }

    render(){
        return (
            <View style={[styles.container,this.state.isActive ? styles.activated:null]}>
                {
                    !this.state.isActive ?
                        <View style={styles.listItem}>
                            <Text style={styles.name}>+7 XXX XXX XX XX</Text>
                            <TouchableOpacity onPress={this.show} style={styles.btn}>
                                <Text style={styles.btnText}>
                                     Показать
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={[styles.listItem]}>
                            <Text style={[styles.name,this.state.isActive ? styles.activatedName:null]}>{this.props.item.number}</Text>
                            <TouchableOpacity style={[styles.btn,this.state.isActive ? styles.btnActivated:null]}>
                                <Text style={[styles.btnText, this.state.isActive ? styles.activatedName:null]}>
                                    Позвонить
                                </Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        )
    }
    
   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,0.05)",
        paddingVertical:5,
        paddingHorizontal:15,
        marginBottom:10,
        borderRadius:5
    },
    listItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    activated:{
        backgroundColor:"rgba(39,214,99,0.8)"
    },  
    name:{
        fontSize:12,
        fontWeight:"300",
        padding:0
    },  
    activatedName:{
        color:"#fff"
    },  
    btn:{
        backgroundColor:"rgba(229,229,229,1)",
        borderRadius:5,
    },
    btnActivated:{
        backgroundColor:"rgba(39,214,99,1)"
    },
    btnText:{
        fontSize:12,
        fontWeight:"300",
        padding:5
    },
})

export default ContactListItem