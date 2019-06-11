import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Modal,
  TextInput
} from "react-native";
import { Header, SearchBar, Item } from "../../commons";
import UserProfile from "../../commons/UserProfile";
import SegmentControl from "react-native-segment-control";
import { bindActionCreators } from "redux";
import { Constants } from "expo";
import InfoBox from "./InfoBox";
import ButtonBox from "./ButtonBox";
import Ionicons from 'react-native-vector-icons/Ionicons';

import list from "../../assets/images/align-to-right.png";
import contacts from "../../assets/images/сontacts.png";
import earth from "../../assets/images/globe_earth.png";
import medical from "../../assets/images/medical.png";

import { connect } from "react-redux";
import { getProfile, changePassword } from "../../actions/UserActions";

import Grid from "react-native-grid-component";

const One = props => {
  return (
    <View>
      <InfoBox
        image={list}
        title="ИИН"
        description={(props.profile.IIN && props.profile.IIN) || "Нет данных"}
      />
      <InfoBox
        image={contacts}
        title="Номер"
        description={props.profile.phone}
      />
    </View>
  );
};
const Two = props => {
  return (
    <View>
      <ButtonBox image={earth} title="Язык" description="Русский" />
      <ButtonBox
        onPress={() => props.toggleModal()}
        boxStyle={styles.boxStyle}
        image={medical}
        title={props.changePassword}
        description={props.change}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.toggleModal();
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.05)"
          }}
        >
          <View
            style={{
              width: "80%",
              padding: 20,
              backgroundColor: "#fff",
              elevation: 3,
              shadowColor: "rgba(0,0,0,0.05)"
            }}
          >
            <Text>{props.oldPassword}</Text>
            <TextInput
              value={props.oldPasswordValue}
              onChangeText={oldPassword =>
                props.onChangeText("password", oldPassword)
              }
            />
            <Text>{props.newPassword}</Text>
            <TextInput
              value={props.newPasswordValue}
              onChangeText={newPassword =>
                props.onChangeText("newPassword", newPassword)
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const _renderItem = (data, i) => (
  <Item
    tags={["black", "white", "red", "green", "blue", "blue"]}
    navigate={this.navigate}
    index={i}
  />
);
const _renderPlaceholder = i => <View style={styles.item} key={i} />;

const Three = () => {
  return (
    <View style={styles.viewBox}>
      <SearchBar />
      <View style={styles.wrapContainer}>
        {/* <Grid
          style={styles.list}
          renderItem={_renderItem}
          renderPlaceholder={_renderPlaceholder}
          data={["black", "white", "red", "green", "blue", "blue"]}
          itemsPerRow={2}
        /> */}
      </View>
    </View>
  );
};

class Profile extends Component {
  state = {
    password: "",
    newPassword: "",
    modalVisible: false
  };

  componentDidMount() {
    this.props.getProfile();
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };
  onChange = (key, value) => {
    this.setState(state => {
      state[key] = value;
      return state;
    });
  };

  changePassword = () => {
      if(this.state.password === this.props.profile.password) {
        this.props.changePassword({
            password:newPassword
        })
      }
  };

  render() {
    const segments = [
      {
        title: <Ionicons name="ios-person"/>,
        view: One,
        viewProps: {
          profile: this.props.profile.profile
        }
      },
      {
        title: "Мои Товары",
        view: Three
      },
      {
        title: "Настройки",
        view: Two,
        viewProps: {
          oldPasswordValue: this.state.password,
          newPasswordValue: this.state.newPassword,
          onChangeText: (key, value) => this.onChange(key, value),
          modalVisible: this.state.modalVisible,
          toggleModal: () => this.toggleModal(),
          title: this.props.translate.currentLanguage.mainTabs.changePassword
            .title,
          change: this.props.translate.currentLanguage.mainTabs.changePassword
            .change,
          oldPassword: this.props.translate.currentLanguage.mainTabs
            .changePassword.oldPassword,
          newPassword: this.props.translate.currentLanguage.mainTabs
            .changePassword.newPassword,
            changePassword:() =>this.changePassword()
        }
      },
      {
        title: "Избранное",
        view: Three
      }
    ];
    console.log(this.props.profile.profile);
    return (
      <SafeAreaView style={styles.container}>
        <UserProfile
          user={this.props.profile.profile}
          textStyle={styles.textStyle}
          imageStyle={styles.imageStyle}
          starSize={12}
        />
        <View style={styles.wrapContainer}>
          <SegmentControl color={"#EF741C"} segments={segments} />
        </View>
      </SafeAreaView>
    );
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
const mapStateToProps = ({ profile, translate, errors }) => {
  return { profile, translate, errors };
};

const mapDispatchToProps = dispatch => ({
  getProfile: bindActionCreators(getProfile, dispatch),
  changePassword: bindActionCreators(changePassword,dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
