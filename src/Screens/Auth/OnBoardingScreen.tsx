import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {useRef, useState} from 'react';
import {heightPercentage} from '../../Helpers/helpers';
import LottieView from 'lottie-react-native';
import Button from '../../Components/Button/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../StackParamLists/AuthStackParamList';
import COLORS from '../../Constants/COLORS';

const OnBoardingData = [
  {
    id: 0,
    text: 'İstediğin an, istediğin yerde',
    animation: require('../../Assets/Animations/monkey.json'),
  },
  {
    id: 1,
    text: 'Aralıksız İngilizce öğrenme fırsatı',
    animation: require('../../Assets/Animations/bookworm-doggo.json'),
  },
  {
    id: 2,
    text: 'Hadi başlayalım !',
    animation: require('../../Assets/Animations/cute-tiger.json'),
  },
];
type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'OnBoardingScreen'>;
};
const OnBoardingScreen = ({navigation}: Props) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const {width} = Dimensions.get('window');

  const renderItem = ({item, index}: any) => {
    return (
      <View style={{flex: 1}} key={index}>
        <LottieView
          source={item.animation}
          loop={true}
          autoPlay={true}
          style={styles.animationItem}
        />
        <Text style={styles.onboardingText}>{item.text}</Text>
      </View>
    );
  };

  const nextSlide = (index: number) => setActiveSlide(index);
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={width}
        data={OnBoardingData}
        extraData={OnBoardingData}
        renderItem={renderItem}
        onSnapToItem={nextSlide}
      />
      <Pagination
        dotsLength={OnBoardingData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotStyle={styles.dots}
        inactiveDotStyle={styles.inactiveDots}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <Button
        text={'Hadi Başlayalım !'}
        onPress={() => {
          navigation.navigate('AuthScreen');
        }}
        buttonStyle={styles.button}
        corners="curved"
        size="large"
        color={COLORS.text}
        disabled={!(activeSlide === OnBoardingData.length - 1)}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: heightPercentage(12),
    alignSelf: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
  },
  inactiveDots: {
    backgroundColor: COLORS.primary,
  },
  animationItem: {
    marginBottom: 50,
  },
  onboardingText: {
    position: 'absolute',
    bottom: heightPercentage(11),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.text,
  },
  button: {
    marginBottom: heightPercentage(5),
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
