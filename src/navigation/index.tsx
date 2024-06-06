import {COLORS, FONTS, SIZES} from '@/constants/theme';
import LoginScreen from '@/screens/LoginScreen';
import RegisterScreen from '@/screens/RegisterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
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
        name="Login"
        component={LoginScreen}
        options={{title: 'Авторизация'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Регистрация'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
