import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import StarRating from 'react-native-star-rating';

class Book extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2-30, borderWidth: 1, borderColor: '#dddddd', marginBottom:10,borderRadius: 10}}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: 200, resizeMode: 'contain', borderRadius: 5}}
                        source={{uri:`${this.props.image}`}} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>{this.props.availability}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.title}</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.genre}</Text>
                    <StarRating
                        disable={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}

                    />
                </View>
            </View>
        );
    }
}
export default Book;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});