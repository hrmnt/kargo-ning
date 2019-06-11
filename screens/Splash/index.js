import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

class Splash extends React.Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const token = "";

    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // We have data!!

        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: "MainTabs" })]
        });
        navigation.dispatch(resetAction);
        console.log("token", value);
      }
    } catch (error) {
      // Error retrieving data
      const resetAction = StackActions.reset({
        index: 0,

        actions: [NavigationActions.navigate({ routeName: "AuthStack" })]
      });
      navigation.dispatch(resetAction);
      console.log("err", error.message);
    }
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>KARGO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    fontSize: 18
  }
});

export default Splash;
