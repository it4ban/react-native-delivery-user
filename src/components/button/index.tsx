import {IButton} from './button.interface';
import {COLORS, FONTS, SHADOWS, SIZES} from '@/constants/theme';
import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button: React.FC<PropsWithChildren<IButton>> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 30,
    width: SIZES.width / 1.5,
    ...SHADOWS.default,
  },
  text: {
    fontFamily: FONTS.regular,
    color: '#fff',
    textAlign: 'center',
    fontSize: SIZES.medium,
  },
});

export default Button;
