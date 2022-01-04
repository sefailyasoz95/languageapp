import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CategoryList from '../../Components/Category/CategoryList';
import useTts from '../../Hooks/useTts';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';
type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  const {speakTR, speakEN} = useTts();

  const showCategoryItems = async (item: any) => {
    await speakTR(item.categoryNameTR);
    await speakEN(item.categoryNameEN);
    navigation.navigate('CategoryList', {category: item});
  };
  return (
    <View style={styles.container}>
      <CategoryList showCategoryItems={showCategoryItems} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
