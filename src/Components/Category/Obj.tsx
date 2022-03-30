import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentage} from '../../Helpers/helpers';
import {getObject} from '../../Utils/objectAPI';

interface Props {
  item: any;
  onPress: (item: any) => void;
}

const Obj = React.memo(({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.textContainer, {borderColor: item.value}]}
      onPress={onPress}>
      {item ? (
        <Image
          source={{uri: item.image}}
          width={50}
          height={50}
          style={styles.image}
        />
      ) : (
        <View style={[styles.image, styles.activity]}>
          <ActivityIndicator
            size={25}
            color={'red'}
            style={{alignSelf: 'center'}}
          />
        </View>
      )}
      <View style={[styles.trEnContainer]}>
        <Text style={[styles.trEn]}>{`${item.tr} / `}</Text>
        <Text style={[styles.trEn]}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Obj;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'transparent',
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: '#bbb',
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    elevation: 12,
    width: widthPercentage(75),
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignSelf: 'center',
  },
  trEn: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    color: '#000',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
  trEnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.4,
    borderRadius: 10,
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
