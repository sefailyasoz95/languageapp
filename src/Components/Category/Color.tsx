import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../Constants/COLORS';

interface Props {
  item: any;
  onPress: (item: any) => void;
}

const Color = React.memo(({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.textContainer,
        {borderColor: item.value, backgroundColor: item.value},
      ]}
      onPress={onPress}>
      {/* <Text style={[styles.text, {color: item.value}]}>{item.value}</Text> */}
      <View style={styles.trEnContainer}>
        <Text style={[styles.trEn]}>{`${item.tr} / `}</Text>
        <Text style={[styles.trEn]}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Color;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textContainer: {
    borderWidth: 3,
    alignItems: 'center',
    borderStyle: 'solid',
    margin: 5,
    justifyContent: 'center',
    borderRadius: 12,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '90%',
    alignSelf: 'center',
  },
  trEn: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
    color: COLORS.light,
  },
  trEnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    alignSelf: 'center',
  },
});
