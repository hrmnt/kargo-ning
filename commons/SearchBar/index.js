import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class SearchBar extends Component {
  style = {
    open: false
  };

  render() {
    return (
      <View style={[styles.container, this.props.backgroundColor]}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View style={styles.inputContainer}>
            <Ionicons
              name="ios-search"
              size={22}
              style={styles.search}
              color="rgba(0,0,0,0.2)"
            />
            <TextInput style={styles.input} placeholder={"Найдите товар"} />
          </View>
          <TouchableOpacity style={styles.filterWrap}>
            <FontAwesome color={"#fff"} name={"filter"} size={22} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{borderBottomColor:"rgba(0,0,0,0.05)", borderBottomWidth:1, paddingVertical:10}}>
            <Text style={styles.tx1}>Цена товара</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between",
        alignItems:"center"}}>
              <View style={{width:"45%"}}>
                <Text style={styles.tx2}>Минимальная цена</Text>
                <TextInput placeholder="0" keyboardType="numeric" style={styles.inputCC} />
              </View>
              <Ionicons
                name="ios-arrow-back"
                size={22}
                style={[styles.search, {marginTop:16}]}
                color="rgba(0,0,0,0.2)"
              />
              <View style={{width:"45%"}}>
                <Text style={styles.tx2}>Максимальная цена</Text>
                <TextInput  placeholder="100"  keyboardType="numeric"style={styles.inputCC}/>
              </View>
            </View>
          </View>
        </View>
        <View style={{borderBottomColor:"rgba(0,0,0,0.05)", borderBottomWidth:1, paddingVertical:10}}>
          <View>
            <Text style={styles.tx1}>Ваши рубрики</Text>
            <View style={{flexDirection:"row", width:"100%",flexWrap:"wrap"}}>
              
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 10
  },
  mainText: {
    fontSize: 28,
    color: "#EF741C",
    fontWeight: "normal"
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 5
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#c9c9c9"
  },
  search: {
    paddingRight: 10
  },
  filterWrap: {
    backgroundColor: "#EF741C",
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  tx1:{
      fontSize:16,
      fontWeight:"500",
      marginBottom:5
  },
  tx2:{
    fontSize:10,
    color:"#c9c9c9",
    marginBottom:3
  },
  inputCC:{
    backgroundColor:"#rgba(0,0,0,0.05)",
    paddingHorizontal:7.5,
    paddingVertical:5,
    borderRadius:5,
  }
});

export default SearchBar;
