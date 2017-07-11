import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene
          onRight={() => Actions.NewsItem()}
          rightTitle="Add"
          key="NewsList"
          component={NewsList}
          title="NewsList"
          initial
        />
        <Scene key="NewsDetail" component={NewsDetail} title="News Detail" />
      </Scene>
    </Router>

  );
};

export default RouterComponent;
