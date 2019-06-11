import React from "react";
import { Constants } from "expo";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import DropdownAlert from "react-native-dropdownalert";
import { Header, SearchBar, Item } from "../../commons";

import { InputField } from "../../commons";

import { signUp } from "../../actions/AuthActions";
import SwitchSelector from "react-native-switch-selector";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextInputMask } from "react-native-masked-text";

class SignUp extends React.Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      phone: "",
      password: "",
      checkPassword: "",
      position: ""
    },
    userType: 0
  };

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    if (nextProps.auth.registered) {
      this.onSuccess();
    }
    if (nextProps.errors) {
      this.onError(nextProps.errors);
    }
  }
  onBack = () => {
    const { pop } = this.props.navigation;
    pop(1);
  };

  onSuccess = () => {
    const { navigation } = this.props;
    if (this.state.userType === 1) {
      navigation.navigate("SignUpOrder");
    } else {
      navigation.navigate("SignUpContinue");
    }
  };
  onError = error => {
    this.dropdown.alertWithType("error", "Error", error);
  };

  nextPage = () => {
    this.onSubmit();
  };

  onChange = (key, value) => {
    this.setState(state => {
      state["data"][key] = value;
      return state;
    });
  };

  onSubmit = () => {
    console.log(this.state);
    const { data } = this.state;
    const { signUp } = this.props;
    const {
      first_name,
      last_name,
      password,
      checkPassword,
      phone,
      position
    } = data;
    if (first_name.length < 1) {
      return;
    }
    if (last_name.length < 1) {
      return;
    }
    if (password.length < 6) {
      return;
    }
    if (password !== checkPassword) {
      return;
    }
    if (phone.length < 8) {
      return;
    } else {
      console.log("start");
      const user = {
        first_name,
        last_name,
        position,
        phone,
        password
      };
      signUp(user);
    }
  };

  render() {
    const options = [
      { label: "Покупатель", value: "1" },
      { label: "Продовец", value: "2" }
    ];
    return (
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAwareScrollView style={styles.container}>
          <Header onBack={() => this.onBack()} title={"Регистрация"} />
          <View style={styles.wrapContainer}>
            <SwitchSelector
              buttonColor={"#Ef741C"}
              options={options}
              initial={0}
              onPress={value =>
                this.setState(state => {
                  state["data"]["position"] = value;
                  return state;
                })
              }
            />
          </View>
          <View style={styles.wrapContainer}>
            <InputField
              cc="first_name"
              value={this.state.data.first_name}
              onChange={this.onChange}
              title={"Имя"}
              placeholder={"Имя"}
            />
            <InputField
              cc="last_name"
              value={this.state.data.last_name}
              onChange={this.onChange}
              title={"Фамилия"}
              placeholder={"Кажиев"}
            />
          </View>
          <View style={styles.wrapContainer}>
            <View style={{paddingHorizontal:15}}>
              <Text style={styles.title}>Номер телефона</Text>
              <View style={[styles.txtContainer]}>
                <TextInputMask
                  type={"custom"}
                  options={{
                    mask: "+7 (999) 999-99-99"
                  }}
                  placeholder="+7 (999) 999-99-99"
                  keyboardType={"numeric"}
                  value={this.state.data.phone}
                  onChangeText={(text, raw) => {
                    this.setState(state => {
                      state.data.phone = text;
                      return state;
                    });
                  }}
                  style={styles.inputContainer}
                />
              </View>
            </View>
          </View>
          <View style={styles.wrapContainer}>
            <InputField
              cc="password"
              value={this.state.data.password}
              onChange={this.onChange}
              title={"Пароль"}
              secureTextEntry={true}
              placeholder={"*********"}
            />
            <InputField
              cc="checkPassword"
              value={this.state.data.checkPassword}
              onChange={this.onChange}
              title={"Повтор пароля"}
              secureTextEntry={true}
              placeholder={"*********"}
            />
          </View>
          <TouchableOpacity onPress={this.nextPage} style={styles.circleBtn}>
            <EvilIcons color={"#fff"} size={40} name={"chevron-right"} />
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <DropdownAlert
          containerStyle={{ marginTop: Constants.statusBarHeight }}
          ref={ref => (this.dropdown = ref)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    flex: 1
  },
  forgotTxt: {
    fontSize: 14,
    color: "#5286da"
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.05)",
    marginBottom: 10
  },
  helloTxt: {
    color: "#Ef741C",
    fontSize: 20,
    fontWeight: "500"
  },

  wrapContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    paddingVertical: 10,
    marginHorizontal: 15
  },
  circleBtn: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "#Ef741C",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 80
  },
  inputContainerSS: {
    paddingHorizontal: 15,
    marginBottom: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 14
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

const mapStateToProps = ({ auth, errors }) => {
  return { auth, errors };
};

const mapDispatchToProps = dispatch => ({
  signUp: bindActionCreators(signUp, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
