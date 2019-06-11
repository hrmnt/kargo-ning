import React, { Component } from "react";
import { Constants } from "expo";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Header, SearchBar, Item } from "../../commons";
import Grid from "react-native-grid-component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts, setCurent } from "../../actions/ProductActions";

class Home extends Component {
  state
  componentDidMount() {
    this.props.getProducts();
  }

  navigate = product => {
    this.props.setCurent(product);
    const { navigation } = this.props;
    navigation.navigate("DetailedProduct");
  };

  _renderItem = (data, i) => (
    <Item
      product={data}
      tags={data.categories}
      navigate={this.navigate}
      index={i}
    />
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {
    console.log(this.props.translate);
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title={this.props.translate.currentLanguage.mainTabs.home.title}
        />
        <SearchBar />
        <View style={styles.wrapContainer}>
          <Grid
            style={styles.list}
            renderItem={this._renderItem}
            renderPlaceholder={this._renderPlaceholder}
            data={this.props.products.products}
            itemsPerRow={2}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});

const mapStateToProps = ({ products, translate, errors }) => {
  return { products, translate, errors };
};

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(getProducts, dispatch),
  setCurent: bindActionCreators(setCurent, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
