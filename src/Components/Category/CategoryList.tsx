import React from 'react';
import {
  FlatList,
  GestureResponderEvent,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {Categories} from '../../Constants/categoryData';

type Props = {
  showCategoryItems(params: any): void;
};

const CategoryList = ({showCategoryItems}: Props) => {
  return (
    <FlatList
      data={Categories}
      renderItem={({item}) => (
        <TouchableOpacity
          key={item.id}
          style={styles.renderItem}
          onPress={() => showCategoryItems(item)}>
          <Image
            source={item.image}
            height={120}
            width={150}
            style={styles.imgBackground}
          />
          <SharedElement id={`${item.id}.${item.categoryNameEN}`}>
            <Text
              style={
                styles.text
              }>{`${item.categoryNameTR} / ${item.categoryNameEN}`}</Text>
          </SharedElement>
          <Text
            style={
              styles.text
            }>{`${item.categoryNameTR} / ${item.categoryNameEN}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  renderItem: {
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    letterSpacing: 1,
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#000',
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
  },
  imgBackground: {
    width: 250,
    height: 120,
    resizeMode: 'cover',
  },
});
