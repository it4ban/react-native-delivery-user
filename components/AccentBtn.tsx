import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS, SIZES, SHADOWS, FONTS} from '../constants/theme';

const AccentBtn = ({
  children,
  style,
  onPress,
}: {
  children: any;
  outline?: boolean;
  style?: ViewStyle;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
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

export default AccentBtn;
