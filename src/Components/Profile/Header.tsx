import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

interface Props {}

const Header = (props: Props) => {
  return (
    <View style={styles.topHeader}>
      <View style={styles.topHeaderLeft}>
        {/* <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color={'white'}
          /> */}
        <Text style={styles.name}>ifbbbro_sefa</Text>
      </View>
      <View style={styles.topHeaderRight}>
        <TouchableOpacity>
          <Feather
            name="plus-square"
            size={25}
            color={'white'}
            style={{ margin: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={22}
            color={'white'}
            style={{ margin: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '7%',
  },
  topHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  topHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    letterSpacing: 1,
    fontSize: 17,
  },
});
