import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export default (size: number): string => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 'px';
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2 + 'px';
  }
};
