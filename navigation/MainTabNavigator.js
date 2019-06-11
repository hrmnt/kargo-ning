import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { AddProduct, CompanyDetailed,DetailedProduct, Home, SignIn, SignUp, SignUpContinue, SignUpOrder, Splash, Profile } from "../screens";

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts, setCurent } from "../actions/ProductActions";

const AuthContainer = createStackNavigator({

  SignIn:{
    screen:SignIn
  },
  SignUp:{
    screen:SignUp
  },
  SignUpOrder:{
    screen:SignUpOrder
  },
  SignUpContinue:{
    screen: SignUpContinue
  }
},{ headerMode: 'none' })

const HomeStack = createStackNavigator({
  Home,
  DetailedProduct,
  CompanyDetailed
}, {
  headerMode:"none"
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AddProductStack = createStackNavigator({
  AddProduct
}, {
  headerMode:"none"
});

AddProductStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfileContainerStack = createStackNavigator({
  Profile
},{
  headerMode:"none"
});

ProfileContainerStack.navigationOptions = {
  tabBarLabel: "Профиль",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
const App = createBottomTabNavigator({
  HomeStack,
  AddProductStack,
  ProfileContainerStack,
})

const Router = createStackNavigator({
  // Splash:{
  //   screen:Splash
  // },
  AuthStack:{
    screen:AuthContainer
  },
  MainTabs:{
    screen: App
  }
},{ headerMode: 'none' })

const mapStateToProps = ({ products, translate, errors }) => {
  return { products, translate, errors };
};

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(getProducts, dispatch),
  setCurent: bindActionCreators(setCurent, dispatch)
});




export default connect(mapStateToProps,
  mapDispatchToProps)(Router);
