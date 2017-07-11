import React, { Component } from 'react';
import { ActivityIndicator,
         ListView, View,

        } from 'react-native';

//import { Actions } from 'react-native-router-flux';
import NewsItem from './NewsItem';
//import * as actions from '../actions';

export default class NewsList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hasil: []
    };
  }

  componentDidMount() {
    return fetch(' https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=ad33e5ca925a461cbcc5ae5b63239441')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.articles),
          db: responseJson.articles,

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderRow(kirim) {
    //console.log(kirim);
    return <NewsItem kirim={kirim} />;
  }

  render() {
 //console.log(this.state.db);

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 60 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
            />
    );
  }
}
