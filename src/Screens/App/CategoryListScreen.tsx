import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen = ({navigation, route}: Props) => {
  const {category} = route.params;
  return (
    <View
      style={{
        width: '95%',
        justifyContent: 'center',
        flex: 1,
      }}>
      <SharedElement id={`${category.id}.${category.categoryNameEN}`}>
        <ImageBackground
          source={category.image}
          width={10}
          height={10}
          style={styles.img}
        />
      </SharedElement>
      <Text style={styles.text} onPress={() => navigation.goBack()}>
        {category.categoryNameEN}
      </Text>
    </View>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: 'black',
  },
});
