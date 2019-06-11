import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Header, SearchBar, Item, Tags } from "../../commons";
import UserProfile from "../../commons/UserProfile";
import SegmentControl from "react-native-segment-control";
import Grid from "react-native-grid-component";
import ContactList from "../../commons/ContactList";

import alignToRight from "../../assets/images/align-to-right.png";
import price from "../../assets/images/price.png";
import contacts from "../../assets/images/сontacts.png";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

class CompanyDetailed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tags: ["black", "white", "red", "green", "blue", "blue"]
  };
  componentDidMount() {
    console.log(this.props);
  }

  navigate = () => {
    this.props.navigation.navigate("DetailedProduct");
  };

  _renderItem = (data, i) => (
    <Item tags={this.state.tags} navigate={this.navigate} index={i} />
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  onBack = () => {
    const { pop } = this.props.navigation;
    pop(1);
  };

  render() {
    const One = () => {
      if (
        this.props.products.currentProduct.boutique.market.products !==
        (null || undefined)
      ) {
        return (
          <Grid
            style={styles.list}
            renderItem={this._renderItem}
            renderPlaceholder={this._renderPlaceholder}
            data={["black", "white", "red", "green", "blue", "blue"]}
            itemsPerRow={2}
          />
        );
      } else {
        return (
          <View style={styles.emptyWrap}>
            <Text>{this.props.translate.currentLanguage.errors.empty}</Text>
          </View>
        );
      }
    };
    const Two = () => {
      if (
        this.props.products.currentProduct.boutique.market.phoneList !==
        (null || undefined)
      ) {
        return (
          <ContactList
            contactList={this.props.currentProduct.boutique.market.phoneList}
            style={styles.list}
            image={contacts}
            title={this.props.translate.currentLanguage.constants}
          />
        );
      } else {
        return (
          <View style={styles.emptyWrap}>
            <Text>{this.props.translate.currentLanguage.errors.empty}</Text>
          </View>
        );
      }
    };
    const segments = [
      {
        title: this.props.translate.currentLanguage.constants.products,
        view: One
      },
      {
        title: this.props.translate.currentLanguage.constants.contacts,
        view: Two
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Header onBack={() => this.onBack()} />
        <View style={styles.titleWrap}>
          <Text style={styles.title}>
            {this.props.products.currentProduct.boutique.market.name}
          </Text>
        </View>
        <UserProfile
          user={this.props.products.currentProduct.boutique.market}
          textStyle={styles.textStyle}
          starSize={12}
        />
        <SearchBar
          backgroundColor={styles.searchBar}
          backgroundColor={styles.bgWhite}
        />
        <SegmentControl color={"#EF741C"} segments={segments} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapContainer: {
    flexGrow: 1,
    backgroundColor: "#fff"
  },
  wrapContainers: {
    flexGrow: 1
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
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)"
  },
  item: {
    flex: 1,
    height: 120,
    margin: 1
  },
  list: {
    minHeight: 270
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
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
  },
  bgWhite: {
    backgroundColor: "#fff"
  },
  textStyle: {
    marginBottom: 2
  },
  searchBar: {
    marginBottom: 20
  },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = ({ products, translate, errors }) => {
  return { products, translate, errors };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetailed);
