import {TouchableOpacityProps} from 'react-native';

export interface IButton extends TouchableOpacityProps {
  activeOpacity?: number | undefined;
}
