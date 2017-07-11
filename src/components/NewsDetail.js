import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class NewsDetail extends Component {
  render() {
    const { titleStyle, thumbnailStyle, bigblue } = styles;
    const { author, urlToImage, description } = this.props.kirim;

    return (
      <View style={{ flex: 1, alignItems: 'stretch' }}>
        <Text style={bigblue}>{author}</Text>
        <Image style={thumbnailStyle} source={{ uri: urlToImage }} />
        <Text style={titleStyle}>{description}</Text>
      </View>
    );
  }
}

const styles = {
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  thumbnailStyle: {
    flex: 1,
      alignSelf: 'stretch',
      width: null,
      height: null

 },

  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
