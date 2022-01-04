import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  item: any;
  onPress: (item: any) => void;
}

const Number = React.memo(({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.textContainer} onPress={onPress}>
      <Text style={styles.text}>{item.value}</Text>
      <View style={styles.trenContainer}>
        <Text style={styles.tren}>{`${item.tr} / `}</Text>
        <Text style={styles.tren}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Number;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    alignItems: 'center',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    padding: 5,
    width: '46%',
    backgroundColor: '#bbb',
  },
  tren: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },
  trenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
