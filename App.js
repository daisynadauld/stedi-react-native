import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timer from './Timer.js';
import SettingsScreen from './SettingsScreen.js';
import Home from './Home.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
<<<<<<< HEAD

// import Icons from "./Icons";
const Tab = createMaterialBottomTabNavigator();

=======
import Login from './Login.js';
// import Icons from "./Icons";
const Tab = createMaterialBottomTabNavigator();
//test Julio...
//testing again
//showing Clark
>>>>>>> dd1d0f26d85dd367344b948c8111262fe9f7f0ab
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='white'
        barStyle={{ backgroundColor: 'green' }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Timer'
          component={Timer}
          options={{
            tabBarLabel: 'Timer',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='bell' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <FontAwesome name='gear' color={color} size={26} />
            ),
          }}
        />
<<<<<<< HEAD
=======
        <Tab.Screen
          name='Login'
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            ),
          }}
        />
>>>>>>> dd1d0f26d85dd367344b948c8111262fe9f7f0ab
      </Tab.Navigator>
    </NavigationContainer>
  );


}


const styles = StyleSheet.create({
  
});
