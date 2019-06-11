import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import car from "../../assets/images/car.jpg";
import fire from "../../assets/images/fire.png";

import tag from "../../assets/images/price_tag.png";

import Tags from "../Tags";
import FeeIcon from "../FeeIcon";

class Item extends Component {
  render() {
    const { index, tags, fee, navigate, product } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigate(product)}
        style={[styles.container, index / 2 == 0 ? styles.left : styles.right]}
      >
        {product.fee && <FeeIcon style={styles.feeWrap} fee="90" />}

        <Image
          style={styles.prePhoto}
          source={{ uri: product.photos[0].img }}
        />
        <View style={styles.wrapContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.row}>
            <Image style={styles.tagImage} source={tag} />

            {product.categories.map(tag => {
              return <Tags text={tag.name} />;
            })}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 225,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 15,
    flex: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#ccc",
    shadowOpacity: 0.5
  },
  left: {
    marginRight: 7.5
  },
  right: {
    marginLeft: 7.5
  },
  mainText: {
    fontSize: 28,
    color: "#EF741C",
    fontWeight: "normal"
  },
  prePhoto: {
    width: null,
    height: 150,
    overflow: "hidden",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  wrapContainer: {
    paddingHorizontal: 7.5,
    paddingVertical: 5
  },
  title: {
    fontSize: 13,
    marginBottom: 5
  },
  row: {
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center"
  },
  tagImage: {
    height: 10,
    width: 10,
    marginRight: 3
  },
  feeWrap: {
    position: "absolute",
    left: 5,
    top: 5,
    zIndex: 3,
    flexDirection: "row",
    alignItems: "center"
  },
  feeText: {
    backgroundColor: "#FF0062",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    position: "absolute",
    left: 22
  },
  fee: {
    fontSize: 10,
    color: "#fff"
  },
  feeImage: {
    height: 26,
    width: 26
  }
});

export default Item;
