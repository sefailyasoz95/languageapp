import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightPercentage, widthPercentage} from '../../Helpers/helpers';
import COLORS from '../../Constants/COLORS';

type Props = {
  item: any;
  showCategoryItems(params: any): void;
};

const CategoryItem = ({item, showCategoryItems}: Props) => {
  return (
    <TouchableOpacity
      key={item._id}
      style={styles.renderItem}
      onPress={() => showCategoryItems(item)}>
      <Image
        source={{uri: item.image}}
        height={12}
        width={15}
        style={styles.container}
      />
      <View>
        <Text style={styles.text}>🇺🇸 {`${item.en}`}</Text>
        <Text style={styles.text}>🇹🇷 {`${item.tr}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    resizeMode: 'contain',
    height: '65%',
  },
  text: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: COLORS.light,
    marginTop: 5,
  },
  renderItem: {
    shadowColor: COLORS.background,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: widthPercentage(75),
    height: '85%',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
    borderColor: COLORS.light,
    borderWidth: 2,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});
