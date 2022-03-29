import {Easing, StyleSheet, Animated, Text, Platform} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {heightPercentage, height} from '../../Helpers/helpers';
import {login} from '../../Redux/actions/authActions';
import {useAppDispatch, useAppSelector} from '../../Redux/store/store';
import COLORS from '../../Constants/COLORS';

type Props = {
  onClose: () => void;
};

const LoginScreen = ({onClose}: Props) => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const dispatch = useAppDispatch();
  const {isFetchingUser} = useAppSelector(state => state.global);

  const handleFormData = (value: string, name: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const opacityLogin = useRef(new Animated.Value(0)).current;
  const loginForm = useRef(new Animated.Value(400)).current;
  const handleLogin = () => {
    console.log('formData: ', formData);

    dispatch(login(formData));
  };
  useEffect(() => {
    Animated.timing(loginForm, {
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    Animated.timing(opacityLogin, {
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
  }, []);
  const closeAnimation = () => {
    Animated.timing(loginForm, {
      useNativeDriver: true,
      toValue: 400,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    Animated.timing(opacityLogin, {
      useNativeDriver: true,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    setTimeout(() => {
      onClose();
    }, 550);
  };
  return (
    <Animated.View
      style={[
        styles.form,
        {opacity: opacityLogin, transform: [{translateY: loginForm}]},
      ]}>
      <Text style={styles.closeIcon} onPress={closeAnimation}>
        ▼
      </Text>
      <Input
        placeholder="Email"
        corner="rounded"
        name="email"
        onTextChanged={handleFormData}
        style={styles.input}
        keyboardType="email-address"
        textStyle={styles.inputText}
        placeholderColor={COLORS.light}
      />
      <Input
        placeholder="Şifre"
        corner="rounded"
        name="password"
        onTextChanged={handleFormData}
        style={styles.input}
        placeholderColor={COLORS.light}
        textStyle={styles.inputText}
        secureTextEntry={true}
      />
      <Button
        key={'login'}
        variant="outlined"
        onPress={handleLogin}
        text="Giriş Yap"
        color={COLORS.light}
        corners="curved"
        size="medium"
        loading={isFetchingUser}
        buttonStyle={styles.button}
      />
    </Animated.View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height:
      height < 550
        ? heightPercentage(45)
        : height < 670
        ? heightPercentage(37)
        : heightPercentage(30),
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
    elevation: 20,
    position: 'absolute',
    bottom: 0,
  },
  input: {
    borderColor: COLORS.light,
    borderWidth: 2,
    marginTop: 20,
    zIndex: 5,
  },
  inputText: {
    color: COLORS.light,
    letterSpacing: 1,
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
  },
  closeIcon: {
    color: COLORS.light,
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
