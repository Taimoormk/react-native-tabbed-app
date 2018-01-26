// import dependencies here
import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import screens here
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen12 from '../screens/Screen12';
import Screen22 from '../screens/Screen22';

// import components here

const {height, width} = Dimensions.get('window');

export const Stack1 = StackNavigator ({
  Screen1: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Screen1',
      headerTitle: 'Screen1',
      headerStyle: {
      },
      headerTitleStyle: {
        alignSelf: 'center',
      }
    }),
  },
  Screen12: {
    screen: Screen12,
    navigationOptions: ({ navigation }) =>  ({
      title: `${navigation.state.params.title}`,
      headerStyle: {
        // backgroundColor: '#000000',
      },
      headerTitleStyle: {
        // fontsize: 20,
        // color: '#FFE400',
      },
      headerBackTitleStyle: {
        // color: '#FFE400',
      },
      headerTintColor: {
        // color: '#FFE400',
      }
    }),
  },
})

export const Stack2 = StackNavigator ({
  Screen2: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen2',
      headerStyle: {
        // backgroundColor: '#000000',
      },
      headerTitleStyle: {
        // fontsize: 25,
        // color: '#FFE400'
      },
      headerBackTitleStyle: {
        // color: '#FFE400',
      },
      headerTintColor: {
        // color: '#FFE400',
      },
    }),
  },
  Screen22: {
    screen: Screen22,
    navigationOptions: ({ navigation }) =>  ({
      title: 'Screen22',
      headerStyle: {
        // backgroundColor: '#000000',
      },
      headerTitleStyle: {
        // fontsize: 20,
        // color: '#FFE400',
      },
      headerBackTitleStyle: {
        // color: '#FFE400',
      },
      headerTintColor: {
        // color: '#FFE400',
      },
    }),
  },
});

export const Tabs = TabNavigator ({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      tabBarLabel: 'Screen1',
      tabBarIcon: ({ tintColor }) => <Icon name="sun-o" type="font-awesome" size={30} color={tintColor} />
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      tabBarLabel: 'Screen2',
      tabBarIcon: ({ tintColor }) => <Icon name="feed" type="font-awesome" size={30} color={tintColor} />
    },
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: {
      tabBarLabel: 'Screen3',
      tabBarIcon: ({ tintColor }) => <Icon name="spinner" type="font-awesome" size={30} color={tintColor} />
    },
  },
  Screen4: {
    screen: Screen4,
    navigationOptions: {
      tabBarLabel: 'Screen4',
      tabBarIcon: ({ tintColor }) => <Icon name="phone" type="font-awesome" size={30} color={tintColor} />
    },
  }, 
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#003366',
    inactiveTintColor: '#666699',
    style: {
      // backgroundColor: '#ffffff'
    }
  },
});