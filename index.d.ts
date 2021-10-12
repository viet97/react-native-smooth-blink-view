import { PureComponent } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface BlinkViewProps {
  delayVisible?: number;
  delayInvisible?: number;
  blinking?: boolean;
  duration?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

declare class BlinkView extends PureComponent<BlinkViewProps> {
  startAnimatedBlinking(): void;
}

export default BlinkView;
