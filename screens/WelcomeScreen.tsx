import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS, FONTS, SHADOWS, SIZES} from '../constants/theme';
import AccentBtn from '../components/AccentBtn';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/delivery-truck.png')}
          style={styles.headerImage}
        />
        <Text style={styles.welcomeHeader}>Добро пожаловать в приложение</Text>
        <Text style={styles.logo}>
          <Text style={{color: COLORS.primary}}>Fit</Text>Parad
        </Text>
        <Text style={styles.subHeader}>
          Присоединяйтесь к нам в путешествии к здоровому образу жизни, где
          каждый глоток – это шаг к лучшему самочувствию.
        </Text>
        <View style={styles.btnContainer}>
          <AccentBtn onPress={() => navigation.navigate('Login')}>
            Войти в аккаунт
          </AccentBtn>
          <TouchableOpacity
            style={{...SHADOWS.default}}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
  wrapper: {
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 35,
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  welcomeHeader: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    textAlign: 'center',
    color: COLORS.dark,
  },
  logo: {
    fontFamily: FONTS.monotype,
    fontSize: SIZES.xxLarge,
    color: COLORS.dark,
  },
  subHeader: {
    fontFamily: FONTS.regular,
    textAlign: 'center',
    color: COLORS.dark,
  },
  btnContainer: {
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  },
  registerText: {
    color: COLORS.dark,
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
  },
});