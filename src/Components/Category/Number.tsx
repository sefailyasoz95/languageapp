import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../Constants/COLORS';
import {widthPercentage} from '../../Helpers/helpers';

interface Props {
  item: any;
  onPress: (item: any) => void;
}

const Number = React.memo(({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.textContainer} onPress={onPress}>
      <Text style={styles.text}>{item.value}</Text>
      <View style={styles.trEnContainer}>
        <Text style={styles.trEn}>{`${item.tr} / `}</Text>
        <Text style={styles.trEn}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Number;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.light,
  },
  textContainer: {
    alignItems: 'center',
    elevation: 12,
    shadowColor: COLORS.black,
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
    backgroundColor: COLORS.secondary,
    width: widthPercentage(45),
  },
  trEn: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
    color: COLORS.light,
  },
  trEnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
