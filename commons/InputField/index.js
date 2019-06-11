import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputField = props => {
  return (
    <View style={[styles.container, props.style ? props.style : null]}>
      {props.title ? <Text style={styles.title}>{props.title}</Text> : null}
      <TextInput
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        keyboardType={props.keyboardType ? props.keyboardType : "default"}
        style={[
          styles.inputContainer,
          props.inputStyle ? props.inputStyle : null
        ]}
        placeholder={props.placeholder ? props.placeholder : "Напишите...."}
        onChangeText={e => props.onChange(props.cc, e)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 10
  },
  title:{
    marginBottom:10,
    fontSize:14
  },    
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#c9c9c9"
  },
  search: {
    paddingRight: 10
  }
});

export default InputField;
