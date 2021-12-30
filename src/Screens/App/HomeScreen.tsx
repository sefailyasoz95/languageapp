import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Tts from 'react-native-tts';
import {options} from '../../Constants/speakOptions';
import useTts from '../../Hooks/useTts';

interface Props {}

const HomeScreen = (props: Props) => {
  const {speak} = useTts();
  useEffect(() => {
    speak('hello world');
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#212121',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff'}}>Hello Aq</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
