import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from "react";

import HomeScreen from "./components/HomeScreen";

const HomeStack = createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        },
    },
});

export default  createAppContainer(createSwitchNavigator(
    {
        Main: HomeStack
    },
    {
        initialRouteName: 'Main'
    }
));
