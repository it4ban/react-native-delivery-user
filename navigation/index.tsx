import React from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

import {COLORS, FONTS, SIZES} from '../constants/theme';

const Stack = createNativeStackNavigator();

const headerBackground = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}
    />
  );
};

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground() {
          return headerBackground();
        },
        headerTitleStyle: {
          fontFamily: FONTS.medium,
          fontSize: SIZES.large,
          color: COLORS.dark,
        },
        headerTintColor: COLORS.dark,
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Регистрация'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Авторизация'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
