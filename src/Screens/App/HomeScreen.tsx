import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoryList from '../../Components/Category/CategoryList';
import Header from '../../Components/Header/Header';
import COLORS from '../../Constants/COLORS';
import {widthPercentage} from '../../Helpers/helpers';
import useTts from '../../Hooks/useTts';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';
type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  const {speakTR, speakEN} = useTts();

  const showCategoryItems = async (category: any) => {
    await speakTR(category.tr);
    await speakEN(category.en);
    navigation.navigate('CategoryList', {category});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Image
          source={require('../../Assets/Images/boy2.png')}
          width={10}
          height={10}
          style={styles.image}
        />
        <View style={styles.textGroup}>
          <Text style={styles.text}>Bir kategori seç</Text>
          <Text style={styles.text}>Dinle ve tekrar et</Text>
          <Text style={styles.text}>öğrendiğini düşündüğün an</Text>
          <Text style={styles.text}>oyunlarla bilgini test et !</Text>
        </View>
      </View>
      <CategoryList showCategoryItems={showCategoryItems} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    top: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    width: widthPercentage(50),
    aspectRatio: 1.1,
    resizeMode: 'contain',
  },
  textGroup: {
    marginLeft: -20,
    alignSelf: 'center',
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.text,
    letterSpacing: 1.2,
  },
});
