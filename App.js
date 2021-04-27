import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import DetailScreen from './src/screens/DetailScreen';
import {Provider} from './src/context/VaccineContext';
import LocationScreen from './src/screens/LocationScreen';


const navigator = createStackNavigator({
    Index: IndexScreen,
    Detail: DetailScreen,
    Location: LocationScreen
  }, 
    {
      initialRouteName: 'Index',
      defaultNavigationOptions: {
        title: 'Ceen',
        headerStyle: {
          backgroundColor: '#CAEAF2',
          height: 100,
        }},
    });

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
  <App />
  </Provider>
};