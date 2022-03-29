import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../Redux/store/store';
import COLORS from '../../Constants/COLORS';

type Props = {};

const Header = (props: Props) => {
  const {user} = useAppSelector(state => state.global);
  return (
    <View style={styles.header}>
      <Text style={styles.headerTexts}>Language App</Text>
      <View style={styles.user}>
        <View style={styles.user}>
          <Text style={styles.headerTexts}>0</Text>
          <Image
            source={require('../../Assets/Images/star.png')}
            width={1}
            height={1}
            style={styles.star}
          />
        </View>
        <Text style={styles.headerTexts}>{user?.name}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  star: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTexts: {
    color: COLORS.text,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});
