import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DropdownAlert from "react-native-dropdownalert";
import { Constants } from "expo";
import { TextInputMask } from "react-native-masked-text";

import { InputField } from "../../commons";
import {
  NavigationActions,
  StackActions,
  SafeAreaView
} from "react-navigation";

import { signIn } from "../../actions/AuthActions";

class SignIn extends React.Component {
  state = {
    data: {
      username: "",
      password: ""
    }
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

  onSuccess = () => {
    const { navigation } = this.props;
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: "MainTabs" })]
    });
    navigation.dispatch(resetAction);
  };
  onError = error => {
    this.dropdown.alertWithType("error", "Error", error);
  };

  registerNavigate = () => {
    console.log("signUp");
    const { navigation } = this.props;
    navigation.navigate("SignUp");
  };

  signIn = () => {
    console.log(this.state);
    const { data } = this.state;
    const { username, password } = data;
    const { signIn } = this.props;
    const regex = /([+() -][])\w+/;
    username.replace(regex, "");

    if (username.length < 1) {
      return;
    }

    if (password.length < 6) {
      return;
    } else {
      console.log("start");
      const user = {
        phone: username,
        password
      };
    console.log("username",username);

      signIn(user);
    }
  };

  onChange = (key, value) => {
    this.setState(state => {
      state["data"][key] = value;
      return state;
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.header}>
              <View style={styles.circle} />
              <Text style={styles.helloTxt}>Добро пожаловать</Text>
            </View>
            <View style={styles.body}>
              <View>
                <View style={[styles.txtContainer]}>
                  <TextInputMask
                    type={"custom"}
                    options={{
                      mask: "+7 (999) 999-99-99"
                    }}
                    placeholder="+7 (999) 999-99-99"
                    keyboardType={"numeric"}
                    value={this.state.data.username}
                    onChangeText={(text, raw) => {
                      this.setState(state => {
                        state.data.username = text;
                        return state;
                      });
                    }}
                    style={styles.inputContainer}
                  />
                </View>
                <InputField
                  cc="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  secureTextEntry={true}
                  placeholder={"*********"}
                />
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.freeBtn}>
                  <Text style={styles.forgotTxt}>Забыли пароль?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.signIn()}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>Войти</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => this.registerNavigate()}
                style={styles.bigBtn}
              >
                <Text style={styles.regTxt}>Регистрация</Text>
              </TouchableOpacity>
            </View>
            <DropdownAlert
              containerStyle={{ marginTop: Constants.statusBarHeight }}
              ref={ref => (this.dropdown = ref)}
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    paddingBottom: 10
  },
  freeBtn: {},
  btn: {
    backgroundColor: "#EF741C",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: "50%"
  },
  btnText: {
    color: "#fff"
  },
  bigBtn: {
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10
  },
  regTxt: {
    color: "#000",
    fontSize: 16
  },
  txtContainer: {
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
  signIn: bindActionCreators(signIn, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
