import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'Detail'>;
};
const DetailScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>category Item detail</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
