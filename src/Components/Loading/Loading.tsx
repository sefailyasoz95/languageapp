import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React, {useRef} from 'react';
import {widthPercentage} from '../../Helpers/helpers';

type Props = {};

const Loading = (props: Props) => {
  const opacity = useRef(new Animated.Value(1)).current;
  Animated.loop(
    Animated.sequence([
      Animated.timing(opacity, {
        useNativeDriver: true,
        duration: 500,
        easing: Easing.ease,
        toValue: 0,
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        duration: 500,
        easing: Easing.ease,
        toValue: 1,
      }),
    ]),
  ).start();
  return (
    <View style={styles.loading}>
      <LottieView
        source={require('../../Assets/Animations/horse-walk-loop.json')}
        loop={true}
        autoPlay={true}
        style={styles.animationItem}
      />
      <Animated.Text style={[styles.text, {opacity}]}>Loading..</Animated.Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationItem: {
    alignSelf: 'center',
    width: widthPercentage(75),
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});
