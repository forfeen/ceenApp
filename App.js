import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import DetailScreen from './src/screens/DetailScreen';
import {Provider} from './src/context/VaccineContext';


const navigator = createStackNavigator({
    Index: IndexScreen,
    Detail: DetailScreen}, 
    {
      initialRouteName: 'Index',
      defaultNavigationOptions: {
        title: 'ceen',
        headerStyle: {
          backgroundColor: '#CAEAF2'}
        },
    });

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
  <App />
  </Provider>
};