import React, { Component } from 'react';
import { View, LayoutAnimation, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { connect } from 'react-redux';
import { CardSection } from './common';
//import * as actions from '../actions';

class NewsItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  // renderDescription() {
  //   const { library, expanded } = this.props;
  //
  //   if (expanded) {
  //     return (
  //       <CardSection>
  //         <Text style={{ flex: 1 }}>{library.description}</Text>
  //       </CardSection>
  //     );
  //   }
  // }

  pilihId() {
    Actions.NewsDetail({ kirim: this.props.kirim });
    console.log(this.props.kirim);
  }
  render() {
    const { titleStyle, thumbnailStyle } = styles;
    const { title, urlToImage } = this.props.kirim;

    return (
     <TouchableWithoutFeedback onPress={this.pilihId.bind(this)}>
        <View>
          <CardSection>
              {/* <TouchableOpacity onPress={this.pilihId.bind(this)}> */}
                <Image style={thumbnailStyle} source={{ uri: urlToImage }} />
                <Text style={titleStyle}>{title}</Text>

              {/* </TouchableOpacity> */}
            </CardSection>
        </View>
     </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  thumbnailStyle: {
   height: 50,
   width: 50,
   borderRadius: 4,
   marginBottom: 5,
   marginTop: 5
 },

  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedLibraryId === ownProps.library.id;
//
//   return { expanded };
// };
export default NewsItem;
