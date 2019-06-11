import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  Image
} from "react-native";
import { Header, SearchBar, Item, Tags } from "../../commons";
import FeeIcon from "../../commons/FeeIcon";
import UserBar from "../../commons/UserBar";
import Accordion from "../../commons/Accordion";
import SwipeableViews from "react-swipeable-views-native";

import alignToRight from "../../assets/images/align-to-right.png";
import price from "../../assets/images/price.png";
import contacts from "../../assets/images/сontacts.png";

import List from "../../commons/List";
import ContactList from "../../commons/ContactList";
import car from "../../assets/images/car.jpg";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class DetailedProduct extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tags: ["black", "white", "red", "green", "blue", "blue"],
    entiries: []
  };

  navigate = () => {
    this.props.navigation.navigate("CompanyDetailed");
  };
  _renderItem = (data, i) => <Item tags={this.state.tags} index={i} />;

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  onBack = () => {
    const { pop } = this.props.navigation;
    pop(1);
  };
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  render() {
    console.log(this.props);
    const asd = {
      slideContainer: {
        height: 150,
        marginTop: 10
      },
      slide: {
        height: 150
      },
      slide1: {
        backgroundColor: "#FEA900"
      },
      slide2: {
        backgroundColor: "#B3DC4A"
      },
      slide3: {
        backgroundColor: "#6AC0FF"
      },
      text: {
        color: "#000",
        fontSize: 16
      }
    };

    const { currentProduct } = this.props.products;
    return (
      <SafeAreaView style={styles.container}>
        <Header onBack={() => this.onBack()} />
        <ScrollView style={styles.wrapContainer}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>{currentProduct.name}</Text>
            <View style={styles.row}>
              {currentProduct.categories.map(tag => {
                return <Tags text={tag.name} />;
              })}
            </View>
          </View>
          <View style={styles.feeWrap}>
            <View style={[styles.priceWrap]}>
              <View style={styles.priceRow}>
                <Text style={styles.topText}>Продовец </Text>
                <Text style={styles.topText}>{currentProduct.price} ₸</Text>
              </View>
              {currentProduct.fee && (
                <View style={styles.priceRow}>
                  <Text style={styles.secText}>от </Text>
                  <Text style={styles.thirdText}>7000 ₸</Text>
                </View>
              )}
            </View>
            {currentProduct.fee && <FeeIcon style={styles.feeWrapW} fee="90" />}
          </View>
          <UserBar market={currentProduct.boutique} onPress={this.navigate} />
          <SwipeableViews style={asd.slideContainer}>
            {currentProduct.photos.map((item, index) => {
              console.log(item);
              return (
                <View key={index} style={[asd.slide, asd.slide1]}>
                  <Image
                    style={{ height: 150, width: "100%" }}
                    source={{ uri: item.img }}
                  />
                </View>
              );
            })}
          </SwipeableViews>
          <Accordion
            desc={currentProduct.description}
            image={alignToRight}
            title={"Описание"}
          />
          <List data={currentProduct} image={price} title={"Цена"} />
          {currentProduct.contacts && (
            <ContactList contactList={currentProduct.contacts} image={contacts} title="Контакты" />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)"
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
  titleWrap: {
    backgroundColor: "#fff"
  },
  item: {
    flex: 1,
    height: 120,
    margin: 1
  },
  list: {
    flex: 1
  },
  title: {
    fontSize: 22,
    marginBottom: 3,
    paddingHorizontal: 15
  },
  row: {
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10
  },
  feeWrap: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  priceWrap: {
    backgroundColor: "#EF741C",
    paddingHorizontal: 7.5,
    paddingVertical: 5,
    borderRadius: 10
  },
  priceRow: {
    flexDirection: "row",
    color: "#fff",
    alignItems: "flex-end"
  },
  topText: {
    color: "#fff",
    fontSize: 7,
    fontWeight: "300"
  },
  secText: {
    color: "#fff",
    fontSize: 12
  },
  thirdText: {
    color: "#fff",
    fontSize: 14
  },
  feeWrapW: {
    zIndex: 3,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center"
  }
});

const mapStateToProps = ({ products, errors }) => {
  return { products, errors };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedProduct);
