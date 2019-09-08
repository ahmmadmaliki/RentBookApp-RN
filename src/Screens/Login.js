import React, { Component } from 'react';
import { StyleSheet, Text,TextInput, View , Alert, AsyncStorage} from 'react-native';
import { Button, Icon, Spinner} from 'native-base';
import {connect} from 'react-redux';
import {userLogin} from '../Publics/Actions/users';
import LoadingPage from './LoadingPage';


 
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          UserData:{
            username: '',
            password: ''
          }
        }
      }
  userLogin=async(data)=>{
    await this.props.dispatch(userLogin(data))
    .then((result)=>{
        if(result.value.data.success==true){
            //AsyncStorage.setItem('token',result.value.data.data)
                this.props.navigation.navigate('Home',{token: result.value.data.data})
              
        }else{
            Alert.alert(
                'Wrong username or password!'
            )
        }
      })
  }
    render(){
        
        return(
        <View style={styles.login}>
            <Text style={styles.welcomed}>Welcome to Rent Book App</Text>
            <TextInput style={styles.email} placeholder="Username" 
            onChangeText={(text)=>{
                let {UserData}=this.state;
                  UserData.username=text
                  this.setState({UserData})
            }}
            />
            <View style={styles.line1}></View>
            <TextInput secureTextEntry={true} style={styles.password} placeholder="Password"
                onChangeText={(text)=>{
                    let {UserData}=this.state;
                      UserData.password=text
                      this.setState({UserData})
                }}
             />
            <View style={styles.line2}></View>
            <View style={styles.button}>
                <Button rounded onPress={()=>{
                    this.userLogin(this.state.UserData)}} >
                    <Icon name='arrow-forward' />
                    </Button>
            </View>
            <Text style={styles.signup}> Sign Up</Text>
            <Text style={styles.forgot}>Forgot Password</Text>
        </View>
        )
    }
}
export default connect()(Login);
const styles = StyleSheet.create({
    login: {
        position: 'relative',
        width: 360,
        height: 640,
        backgroundColor: '#FFFFFF'
    },
    welcomed: {
        position: 'absolute',
        width: 180,
        height: 70,
        left: 33,
        top: 100,
    
        fontFamily: 'Airbnb Cereal App',
        fontSize: 24,
        lineHeight: 31,
        fontWeight: 'bold',
    
        color: '#4B4C72'
    },
    email:{
        position: 'absolute',
        padding: 0,
        margin: 0,
        width: 99,
        height: 19,
        left: 36,
        top: 225,
        fontFamily: 'Airbnb Cereal App',
        fontSize: 13,
        lineHeight: 17,
    
        color: '#4B4C72'
    },
    line1: {
        position: 'absolute',
        width: 284,
        height: 0,
        left: 36,
        top: 259,
    
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#B5B5C9',
        transform: [{rotate: '0.2deg'}],
    },
    password: {
        position: 'absolute',
        padding: 0,
        margin: 0,
        width: 99,
        height: 19,
        left: 36,
        top: 297,
    
        fontFamily: 'Airbnb Cereal App',
        fontSize: 13,
        lineHeight: 17,
    
        color: '#4B4C72'
    
    },
    line2: {
        position: 'absolute',
        width: 284,
        height: 0,
        left: 36,
        top: 328,

        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#B5B5C9',
        transform: [{rotate: '0.2deg'}],
    },
    button: {
        position: 'absolute',
        left: 258,
        padding: 10,
        borderRadius: 25,
        top: 360,
    },
    signup: {
        position: 'absolute',
        width: 126,
        height: 43,
        left: 36,
        top: 507,
    
        fontFamily: 'Airbnb Cereal App',
        fontSize: 13,
        lineHeight: 17,
        textDecorationLine: 'underline',
    
        color: '#4B4C72'
    },
    forgot: {
        position: 'absolute',
        width: 126,
        height: 43,
        left: 225,
        top: 507,
    
        fontFamily: 'Airbnb Cereal App',
        fontSize: 13,
        lineHeight: 17,
        textDecorationLine: 'underline',
        color: '#4B4C72'
    },
    arrow:{
        position: 'absolute',
        width: 20,
        height: 0,
        left: 282,
        top: 397,

        borderWidth: 2 ,
        borderStyle: 'solid', 
        borderColor: '#FFFFFF',
        flex:1
    }
});