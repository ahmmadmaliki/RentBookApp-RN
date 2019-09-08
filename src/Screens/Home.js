import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab,Icon,Item,Input, Button, Text, Spinner } from 'native-base';
import {TouchableOpacity} from 'react-native'
import Category from '../Components/Category';
import Book from '../Components/book'
import {connect} from 'react-redux';
import {getBook} from '../Publics/Actions/book';
import {View, ScrollView,SafeAreaView,Dimensions} from 'react-native';
const { width } = Dimensions.get('window')

class Home extends Component{
    componentDidMount = async () => {
        await this.props.dispatch (getBook ())
      };
    render(){
        const token=this.props.navigation.getParam('token')
        return(
        <Container>
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
        </Header>
            <Content>
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
            <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Genre Book
                            </Text>

                            <View style={{ height: 135, marginTop: 15}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Components/Images/image1.jpg')}
                                        name="Action"
                                    />
                                    <Category imageUri={require('../Components/Images/image2.jpg')}
                                        name="Novel"
                                    />
                                    <Category imageUri={require('../Components/Images/image3.jpg')}
                                        name="Science"
                                    />
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Books List
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {this.props.book.BookList.length>0 ?
                            this.props.book.BookList.map((item,index)=>{
                                return(
                                    <TouchableOpacity 
                                        onPress={()=>{
                                            this.props.navigation.navigate('Details',{value: item, token: token})
                                        }}
                                    >
                                        <Book  width={width} title={item.Title}
                                        genre={item.Genres}
                                        availability={item.Availability}
                                        rating={4} 
                                        image={item.Image}
                                        />
                                    </TouchableOpacity>
                                )
                            }) :<View style={{justifyContent: 'center'}}><Spinner /></View>
                            }
                             </View>
                        </View>
                    </ScrollView>
            </View>
            </SafeAreaView>
            </Content>
            <Footer>
            <FooterTab>
                <Button vertical onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon name="home" />
                <Text>Home</Text>
                </Button>
                <Button vertical onPress={()=>this.props.navigation.navigate('History')}>
                <Icon name="compass" />
                <Text>History</Text>
                </Button>
                <Button vertical onPress={()=>this.props.navigation.navigate('Profile',{token:token})}>
                <Icon active name="person" />
                <Text>Profile</Text>
                </Button>
            </FooterTab>
            </Footer>
        </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
      book: state.book,
    };
  }
export default connect(mapStateToProps)(Home);