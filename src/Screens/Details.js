import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AsyncStorage
} from 'react-native';
import {Left, Body, Button, Icon, Title, Card, CardItem} from 'native-base';
import {getRequest} from '../Publics/Actions/request';
import {borrowBook} from '../Publics/Actions/book';
import {connect} from 'react-redux';
var jwtdecode= require('jwt-decode')

class Details extends Component {
  constructor(props){
    super(props);
    this.state={
        isRequested:false
    }
}
handleClick=()=>{
  this.setState({isRequested: true})
}
componentDidMount = async () => {
  await this.props.dispatch (getRequest());
};
  borrow=async(data)=>{
    await this.props.dispatch(borrowBook(data))
  }
  render() {
    const book = this.props.navigation.getParam('value');
    const token= this.props.navigation.getParam('token');
    const user=jwtdecode(token)
    let i=0;
    let j=0;
    let k=0;
    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.imageHeader}
            source={{
              uri: `${book.Image}`,
            }}
          />
          <View span transparent>
            <Left style={styles.backButton}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon style={styles.icon} name="arrow-back" />
              </Button>
            </Left>
            <Body style={styles.headerText}>
              <Title style={styles.headerTitle}>{book.Title}</Title>
              <Text style={styles.headerDate}>
                {book.Date_Released.substr(0, 10)}
              </Text>
            </Body>
          </View>
          <View style={styles.cardBook}>
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.cardBookImage}
                  source={{
                    uri: `${book.Image}`,
                  }}
                />
              </CardItem>
            </Card>
          </View>
          <View style={styles.detail}>
            <View>
              <Text style={styles.detailText}>{book.Description}</Text>
                {this.props.request.Request.length>0 ?
                  this.props.request.Request.map((item,index)=>{
                    k=k+1;
                    if(item.id_user==user.id_user && item.id==book.id){ 
                      i=i+1
                      if(i>0 && k==this.props.request.Request.length){
                      return(
                        <View>
                        <Button style={styles.actionRentButton} disabled={true} >
                          <Text style={styles.actionButtonText}>Requested </Text>
                        </Button>
                        </View>
                      )}
                    }else if(item.id==book.id){   //request org lain
                      j=j+1;
                      if(j>0 && k==this.props.request.Request.length ){
                        return(
                          <View>
                          <Button style={styles.actionRentButton} disabled={true} >
                          <Text style={styles.actionButtonText}>Unavailable</Text>
                          </Button> 
                          </View>
                        )
                      }
                    }
                    else {
                      if(i==1){
                        return(
                          <View>
                          <Button style={styles.actionRentButton} disabled={true} >
                            <Text style={styles.actionButtonText}>Requested </Text>
                          </Button>
                          </View>
                        )
                      }
                      if(j==1){
                        return(
                          <View>
                          <Button style={styles.actionRentButton} disabled={true} >
                            <Text style={styles.actionButtonText}>Unavailable </Text>
                          </Button>
                          </View>
                        )
                      }
                      if(i==0 && j==0 && k==this.props.request.Request.length){
                      return(
                        <View>
                        <Button style={styles.actionRentButton} disabled={this.state.isRequested} onPress={()=>{
                            const data={ id_user: user.id_user, id: book.id, Title: book.Title, Description: book.Description, Image:book.Image}
                            this.handleClick()
                            this.borrow(data)
                          }}>
                            <Text style={styles.actionButtonText}>{this.state.isRequested ? 'Requested':'Borrow'} </Text>
                          </Button>
                        </View>
                      )}
                   }
                  }
                  ):<View>
                  <Button style={styles.actionRentButton} disabled={this.state.isRequested} onPress={()=>{
                      const data={ id_user: user.id_user, id: book.id, Title: book.Title, Description: book.Description, Image:book.Image}
                      this.handleClick()
                      this.borrow(data)
                    }}>
                      <Text style={styles.actionButtonText}>{this.state.isRequested ? 'Requested':'Borrow'} </Text>
                    </Button>
                  </View>
              }
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageHeader: {
    position: 'absolute',
    top: -20,
    left: 0,
    width: '100%',
    height: 300,
    borderRadius: 10,
    opacity: 0.7,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    left: 19,
    top: 20,
  },
  icon: {color: 'white'},
  headerText: {
    width: 197,
    height: 44,
    marginTop: 220,
    marginLeft: -180,
  },
  headerTitle: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 23,
    color: 'white',
  },
  headerDate: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 17,
    color: 'white',
  },
  cardBook: {
    position: 'absolute',
    right: 20,
    top: 160,
  },
  cardBookImage: {
    width: 120,
    height: 170,
    borderRadius: 5,
  },
  detail: {
    marginTop: 90,
    marginHorizontal: 29,
  },
  detailText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#303031',
  },
  actionRentButton: {
    width: 164,
    height: 39,
    backgroundColor: '#F4CF5D',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionReturnButton: {
    width: 164,
    height: 39,
    backgroundColor: '#0B0870',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionButtonText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 15,
    lineHeight: 20,
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
const mapStateToProps = state => {
  return {
    request: state.request,
  };
}
export default connect(mapStateToProps)(Details);