import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  item: any;
  onPress: () => void;
}

const Obj = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.textContainer} onPress={onPress}>
      <Text style={styles.text}>{item.value}</Text>
      <View style={styles.trenContainer}>
        <Text style={styles.tren}>{`${item.tr} / `}</Text>
        <Text style={styles.tren}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Obj;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    borderWidth: 1,
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    padding: 5,
    width: '45%',
  },
  tren: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  trenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
