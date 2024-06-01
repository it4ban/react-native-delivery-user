import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {IScreen} from './screen.interface';

const Screen: React.FC<PropsWithChildren<IScreen>> = ({children, style}) => {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen;
