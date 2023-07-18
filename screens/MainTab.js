import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';
import WritingScreen from './WritingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from './SearchScreen';
import SearchUp from '../component/SearchUp';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Writing"
        component={WritingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="message" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchUp />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
