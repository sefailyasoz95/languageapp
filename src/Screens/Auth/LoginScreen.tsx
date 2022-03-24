import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is login screen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
