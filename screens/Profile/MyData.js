import React,{Component} from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";




class MyData extends MyData {
    render(){
        return(
            <View>
            <InfoBox image={list} title="ИИН" description="991122334455" />
            <InfoBox
              image={contacts}
              title="Номер"
              description="+7 (777) 111 11 11"
            />
          </View>  
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      paddingTop: Constants.statusBarHeight
    },
    wrapContainer: {
      flex: 1,
      paddingVertical: 10
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
    item: {
      flex: 1,
      height: 120,
      margin: 1
    },
    list: {
      flex: 1
    },
    imageStyle: {
      height: 50,
      width: 50
    },
    textStyle: {
      fontSize: 20
    },
    boxStyle: {
      alignItems: "center"
    },
    viewBox: {
      paddingVertical: 10
    }
  });