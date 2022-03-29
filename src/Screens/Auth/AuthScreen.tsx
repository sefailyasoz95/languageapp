import {
  Animated,
  Easing,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {height, heightPercentage, widthPercentage} from '../../Helpers/helpers';
import Button from '../../Components/Button/Button';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import COLORS from '../../Constants/COLORS';

type Props = {};

const AuthScreen = (props: Props) => {
  const [screen, setScreen] = useState('auth');
  const textGroupRef = useRef(new Animated.Value(-200)).current;
  const bottomForm = useRef(new Animated.Value(400)).current;
  const opacityText = useRef(new Animated.Value(0)).current;
  const opacityForm = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (screen === 'auth') {
      Animated.timing(opacityText, {
        useNativeDriver: true,
        toValue: 1,
        easing: Easing.inOut(Easing.ease),
        duration: 600,
      }).start();
      Animated.timing(textGroupRef, {
        useNativeDriver: true,
        toValue: 0,
        easing: Easing.inOut(Easing.ease),
        duration: 500,
      }).start();
      Animated.timing(opacityForm, {
        useNativeDriver: true,
        toValue: 1,
        easing: Easing.inOut(Easing.ease),
        duration: 600,
      }).start();
      Animated.timing(bottomForm, {
        useNativeDriver: true,
        toValue: 0,
        easing: Easing.inOut(Easing.ease),
        duration: 500,
      }).start();
    }
  }, [screen]);
  const handleAuthFormDisappear = (value: string) => {
    Animated.timing(opacityForm, {
      useNativeDriver: true,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    Animated.timing(bottomForm, {
      useNativeDriver: true,
      toValue: 400,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    setTimeout(() => {
      setScreen(value);
    }, 550);
  };
  const changeScreen = () => {
    setScreen('auth');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onTouchStart={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {transform: [{translateX: textGroupRef}], opacity: opacityText},
          ]}>
          <View style={[styles.headerTextGroup]}>
            <Text style={styles.headerText}>Oku, gör,</Text>
            <Text style={styles.headerText1}>dinle ve tekrarla.</Text>
            <Text style={styles.headerText1}>Oyunlarla pekiştir</Text>
            <Text style={styles.headerText}>öğren!</Text>
          </View>
          <Image
            width={150}
            height={150}
            source={require('../../Assets/Images/boy.png')}
            style={styles.image}
          />
        </Animated.View>
        {screen === 'auth' && (
          <Animated.View
            style={[
              styles.form,
              {opacity: opacityForm, transform: [{translateY: bottomForm}]},
            ]}>
            <Text style={styles.formText}>Hoş Geldin!</Text>
            <Button
              key={'login'}
              variant="outlined"
              onPress={() => {
                handleAuthFormDisappear('login');
              }}
              text="Giriş Yap"
              color={COLORS.light}
              corners="curved"
              size="large"
              buttonStyle={styles.button}
            />
            <Button
              key={'register'}
              variant="filled"
              onPress={() => {
                handleAuthFormDisappear('register');
              }}
              text="Kayıt Ol"
              color={COLORS.primary}
              corners="curved"
              size="large"
              buttonStyle={styles.button}
            />
          </Animated.View>
        )}
        {screen === 'login' && <LoginScreen onClose={changeScreen} />}
        {screen === 'register' && <RegisterScreen onClose={changeScreen} />}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    position: 'absolute',
    bottom: 0,
    elevation: 10,
  },
  image: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    width: widthPercentage(50),
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: 50,
  },
  formText: {
    color: COLORS.light,
    fontWeight: 'bold',
    fontSize: heightPercentage(2),
    marginVertical: 15,
    letterSpacing: 1.2,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
  },
  header: {
    alignItems: 'flex-start',
    top: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  headerText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 1.2,
    marginVertical: 3,
  },
  headerTextGroup: {
    top: height < 550 ? 5 : 10,
  },
  headerText1: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1.2,
    marginVertical: 3,
  },
});
