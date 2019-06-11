import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import avatar from "../../assets/images/avatar.png";
import arrow from "../../assets/images/arrow.png";

const UserBar = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.row}>
      <View style={styles.profileInfo}>
        <Image style={styles.profileImage} source={avatar} />
        <View o style={styles.infoWrap}>
          <Text style={styles.name}>{props.market.name}</Text>
          <View>
            <Text style={styles.companyName}>{props.market.name}</Text>
          </View>
        </View>
      </View>
      <Image resizeMode="contain" style={styles.arrow} source={arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    marginBottom: 10
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileImage: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  name: {
    fontSize: 14
  },
  companyName: {
    fontSize: 10,
    color: "#2F7CFF"
  },
  arrow: {
    height: 20,
    width: 8
  }
});

export default UserBar;
