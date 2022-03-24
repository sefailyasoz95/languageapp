import {Image, Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

type Props = {};

const LoginScreen = (props: Props) => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const handleFormData = (value: string, name: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <View style={styles.container} onTouchStart={Keyboard.dismiss}>
      <View style={styles.header}>
        <Image
          width={150}
          height={150}
          source={require('../../Assets/Images/standing-person.png')}
          style={styles.image}
        />
        <View style={styles.headerTextGroup}>
          <Text style={styles.headerText}>Oku, gör, dinle, tekrarla</Text>
          <Text style={styles.headerText}>Oyunlarla pekiştir ve öğren!</Text>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Hoş Geldin!</Text>
        <Input
          placeholder="Email"
          corner="rounded"
          name="email"
          onTextChanged={handleFormData}
          style={styles.input}
          textStyle={styles.inputText}
          placeholderColor={'#999'}
        />
        <Input
          placeholder="Şifre"
          corner="rounded"
          name="password"
          onTextChanged={handleFormData}
          style={styles.input}
          placeholderColor={'#999'}
          textStyle={styles.inputText}
          secureTextEntry={true}
          keyboardType="email-address"
        />
        <Button
          key={'login'}
          variant="outlined"
          onPress={() => {}}
          text="Giriş Yap"
          color="#ccc"
          corners="curved"
          size="medium"
          buttonStyle={styles.button}
        />
        <Button
          key={'register'}
          variant="filled"
          onPress={() => {}}
          text="Kayıt Ol"
          color="#aaa"
          corners="curved"
          size="medium"
          textColor="black"
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  form: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: '50%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#020202',
    marginBottom: '-30%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  image: {
    transform: [{scale: 1.2}],
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    zIndex: 5,
  },
  inputText: {
    color: 'white',
    letterSpacing: 1,
  },
  formText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 15,
    letterSpacing: 1.2,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 1.2,
    marginVertical: 3,
  },
  headerTextGroup: {
    top: 35,
  },
});
