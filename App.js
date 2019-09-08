import React, { Component } from 'react';
import {createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import History from './src/Screens/History';
import Profile from './src/Screens/Profile';
import LoadingPage from './src/Screens/LoadingPage';
import store from './src/Publics/Store';
import {Provider} from 'react-redux';
import { Root } from "native-base";
const AppNavigator = createStackNavigator({
  login: {
    screen: Login ,
    navigationOptions: ({navigation})=>({
    title: 'Login'
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation})=>({
      header: null
      })
  },
  LoadingPage: {
    screen: LoadingPage,
    navigationOptions: ({navigation})=>({
      header: null
      })
  },
  Details:{
    screen: Details,
    navigationOptions:({navigation})=>({
    header: null
    })
  },
  History:{
    screen: History,
    navigationOptions:({navigation})=>({
    header: null
    })
  },
  Profile:{
    screen: Profile,
    navigationOptions:({navigation})=>({
    header: null
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Root>
        <AppContainer />
        </Root>
      </Provider>
        
    )
  }
}