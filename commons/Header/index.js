import React,{Component} from "react";
import {Text, View, StyleSheet, Dimensions, TouchableOpacity}  from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { onBack, bgColor, txtColor } = this.props;
        return(
            <View style={[styles.container, bgColor && {backgroundColor:bgColor}]}>
                {
                    onBack? 
                    <View style={[styles.backWrap]}>
                        <TouchableOpacity style={styles.buttonWrap} onPress={onBack}>
                            <Ionicons
                                name="ios-arrow-back"
                                size={22}
                                style={{marginRight:5}}
                                color="#EF741C"
                            />
                            <Text style={styles.text}>
                            Назад
                        </Text>
                        </TouchableOpacity>
                        
                    </View>
                    :
                    <Text style={[styles.mainText, txtColor && {color:txtColor}]}>{this.props.title}</Text>
                }
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        paddingHorizontal:15,

    },
    mainText: {
      fontSize: 24,
      color:"#EF741C",
      fontWeight:"normal"
    },
    backWrap:{
        flexDirection:"row",

        alignItems:'center'
    },
    buttonWrap:{
        flexDirection:"row",
        alignItems:'center',

        marginRight:5
    },
    text:{
        color:"#EF741C",
    }
  });


export default Header;