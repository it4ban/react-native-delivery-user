import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const COLORS = {
  primary: '#2463EB',
  dark: '#282D34',
  light: '#F4F7FE',
  gray: '#B4BAC8',
};

const FONTS = {
  monotype: 'MonotypeCorsiva',
  bold: 'RobotoCondensed-Bold',
  medium: 'RobotoCondensed-Medium',
  regular: 'RobotoCondensed-Regular',
  light: 'RobotoCondensed-Light',
};

const SIZES = {
  xSmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xLarge: 24,
  xxLarge: 44,
  width: width,
  height: height,
};

const SHADOWS = {
  default: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
};

export {COLORS, SIZES, FONTS, SHADOWS};
