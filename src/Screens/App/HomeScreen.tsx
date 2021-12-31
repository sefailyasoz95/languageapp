import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoryList from '../../Components/Category/CategoryList';
import useTts from '../../Hooks/useTts';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';
import {
  getbunny,
  getcat,
  getdog,
  getduck,
  getelephant,
  getfox,
  getkoala,
  getpanda,
  getshiba,
} from '../../Utils/animalAPI';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  const {speakTR, speakEN} = useTts();
  const [data, setData] = useState(undefined);
  const get = async () => {
    let x = await getelephant();
    console.log('x: ', x);
    setData(x);
  };
  useEffect(() => {
    // speakTR('hello world once again');
    // get();
  }, []);
  const showCategoryItems = async (item: any) => {
    // await speakTR(item.categoryNameTR);
    // await speakEN(item.categoryNameEN);
    navigation.navigate('CategoryList', {category: item});
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* {data && (
        <Image
          source={{uri: data}}
          width={50}
          height={50}
          style={{width: 250, height: 250}}
        />
      )} */}
      <CategoryList showCategoryItems={showCategoryItems} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
  },
});
