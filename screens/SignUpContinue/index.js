import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from "react-native";
import {Header, SearchBar, Item} from "../../commons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {InputField} from "../../commons";

class SignUpContinue extends React.Component {
    state = {
        data: {
            username: "",
            password: ""
        }
    }

    onBack = () =>{
        const {pop} = this.props.navigation;
        pop(1);
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <Header onBack={this.onBack} ></Header>
                <View style={styles.smsWrap}>
                    <Text>
                        На ваш номер телефона был отправлен смс с пин-кодом. Введите пин-код для подтверждения своего номера
                    </Text>
                    <View style={styles.row}>
                        <InputField inputStyle={styles.inputCode} keyboardType={"numeric"} mask={"[0]"}  placeholder={"0"}/>
                        <InputField inputStyle={styles.inputCode} keyboardType={"numeric"} mask={"[0]"}  placeholder={"0"}/>
                        <InputField inputStyle={styles.inputCode} keyboardType={"numeric"} mask={"[0]"}  placeholder={"0"}/>
                        <InputField inputStyle={styles.inputCode} keyboardType={"numeric"} mask={"[0]"}  placeholder={"0"}/>

                    </View>
                </View>
                <TouchableOpacity onPress={this.nextPage} style={styles.circleBtn}>
                    <EvilIcons color={"#fff"} size={40} name={"chevron-right"}/>
                </TouchableOpacity>



            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    body:{
        flex: 1,

    },
    forgotTxt: {
        fontSize: 14,
        color:"#5286da"
    },
    circle:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:"rgba(0,0,0,0.05)",
        marginBottom:10
    },
    helloTxt:{
        color:"#Ef741C",
        fontSize: 20,
        fontWeight: "500"
    },

    wrapContainer:{
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
        paddingVertical: 10,
        marginHorizontal:15
    },
    circleBtn:{
        height:70,
        width:70,
        borderRadius:35,
        backgroundColor: "#Ef741C",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        marginTop:80
    },
    smsWrap:{
        backgroundColor:"#fde3d2",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: 15,
        paddingHorizontal:15
    },
    row:{
        width:"80%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    inputCode:{
        height:80,
        borderWidth:2,
        borderColor:"#f9cfaf",
        fontSize:36
    }

});

export default SignUpContinue;