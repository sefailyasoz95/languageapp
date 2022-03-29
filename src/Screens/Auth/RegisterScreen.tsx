import {Easing, StyleSheet, Animated, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {height, heightPercentage} from '../../Helpers/helpers';
import {useAppDispatch, useAppSelector} from '../../Redux/store/store';
import {register} from '../../Redux/actions/authActions';
import COLORS from '../../Constants/COLORS';

type Props = {
  onClose: () => void;
};

const RegisterScreen = ({onClose}: Props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const dispatch = useAppDispatch();
  const {isFetchingUser} = useAppSelector(state => state.global);
  const handleFormData = (value: string, name: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const opacityRegister = useRef(new Animated.Value(0)).current;
  const registerForm = useRef(new Animated.Value(400)).current;
  const handleRegister = () => {
    dispatch(
      register({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      }),
    );
  };
  useEffect(() => {
    Animated.timing(registerForm, {
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    Animated.timing(opacityRegister, {
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
  }, []);
  const closeAnimation = () => {
    Animated.timing(registerForm, {
      useNativeDriver: true,
      toValue: 400,
      easing: Easing.inOut(Easing.ease),
      duration: 500,
    }).start();
    Animated.timing(opacityRegister, {
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
        {opacity: opacityRegister, transform: [{translateY: registerForm}]},
      ]}>
      <Text style={styles.closeIcon} onPress={closeAnimation}>
        ▼
      </Text>
      <Input
        placeholder="Ad Soyad"
        corner="rounded"
        name="name"
        onTextChanged={handleFormData}
        style={styles.input}
        textStyle={styles.inputText}
        placeholderColor={COLORS.light}
      />
      <Input
        placeholder="Email"
        corner="rounded"
        name="email"
        onTextChanged={handleFormData}
        style={styles.input}
        textStyle={styles.inputText}
        keyboardType="email-address"
        placeholderColor={COLORS.light}
      />
      <Input
        placeholder="Şifre"
        corner="rounded"
        name="password"
        onTextChanged={handleFormData}
        style={styles.input}
        secureTextEntry={true}
        textStyle={styles.inputText}
        placeholderColor={COLORS.light}
      />
      <Input
        placeholder="Şifreni doğrula"
        corner="rounded"
        name="confirmPassword"
        onTextChanged={handleFormData}
        style={styles.input}
        placeholderColor={COLORS.light}
        textStyle={styles.inputText}
        secureTextEntry={true}
      />
      <Button
        key={'register'}
        variant="outlined"
        onPress={handleRegister}
        text="Kayıt ol"
        color={COLORS.light}
        corners="curved"
        size="medium"
        loading={isFetchingUser}
        buttonStyle={styles.button}
      />
    </Animated.View>
  );
};

export default RegisterScreen;

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
        ? heightPercentage(55)
        : heightPercentage(45),
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
    elevation: 20,
  },
  input: {
    borderColor: COLORS.light,
    borderWidth: 2,
    marginTop: 20,
    zIndex: 5,
  },
  inputText: {
    letterSpacing: 1,
    color: COLORS.light,
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
  },
  closeIcon: {
    color: COLORS.light,
    fontSize: 24,
    alignSelf: 'center',
  },
});
