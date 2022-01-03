import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  item: any;
  onPress: () => void;
}

const Animal = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.textContainer, {borderColor: item.value}]}
      onPress={onPress}>
      {/* <Text style={[styles.text, {color: item.value}]}>{item.value}</Text> */}
      <View style={[styles.trenContainer]}>
        <Text style={[styles.tren]}>{`${item.tr} / `}</Text>
        <Text style={[styles.tren]}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Animal;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'transparent',
  },
  textContainer: {
    borderWidth: 3,
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    width: '75%',
  },
  tren: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    color: '#000',
  },
  trenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
});
