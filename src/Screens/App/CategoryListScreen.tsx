import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Animal from '../../Components/Category/Animal';
import Color from '../../Components/Category/Color';
import Number from '../../Components/Category/Number';
import Obj from '../../Components/Category/Obj';
import {animals, colors, numbers, objects} from '../../Constants/data';
import useTts from '../../Hooks/useTts';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen = ({navigation, route}: Props) => {
  const {speakTR, speakEN} = useTts();
  const {category} = route.params;
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  useEffect(() => {
    if (category.categoryNameEN === 'Numbers') {
      setDataSource(numbers);
    } else if (category.categoryNameEN === 'Animals') {
      setDataSource(animals);
    } else if (category.categoryNameEN === 'Colors') {
      setDataSource(colors);
    } else if (category.categoryNameEN === 'Objects') {
      setDataSource(objects);
    }
  }, []);
  const onPress = React.useCallback(async item => {
    setDisabled(true);
    await speakTR(item.tr);
    await speakEN(item.en);
    setTimeout(() => {
      setDisabled(false);
    }, 2500);
  }, []);
  return (
    <SafeAreaView>
      <SharedElement
        id={`${category.id}.${category.categoryNameEN}`}
        style={styles.sharedElement}>
        <Text style={styles.header} onPress={navigation.goBack}>
          {`${category.categoryNameTR} / ${category.categoryNameEN}`}
        </Text>
      </SharedElement>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Image
          source={require('../../Assets/Images/backImage.png')}
          width={10}
          height={10}
          style={styles.img}
        />
      </TouchableOpacity>
      {disabled && (
        <View style={styles.overlay}>
          <Text style={styles.overlayContent}>{`🔊`} </Text>
        </View>
      )}
      <ScrollView
        style={styles.dataContainer}
        contentContainerStyle={styles.contentContainer}>
        {dataSource.map((item, index) =>
          category.categoryNameEN === 'Colors' ? (
            <Color key={index} item={item} onPress={() => onPress(item)} />
          ) : category.categoryNameEN === 'Numbers' ? (
            <Number key={index} item={item} onPress={() => onPress(item)} />
          ) : category.categoryNameEN === 'Animals' ? (
            <Animal key={index} item={item} onPress={() => onPress(item)} />
          ) : (
            <Obj key={index} item={item} onPress={() => onPress(item)} />
          ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
    alignSelf: 'center',
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    padding: 2,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    borderWidth: 1,
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    padding: 5,
  },
  dataContainer: {},
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 45,
    paddingTop: 5,
  },
  tren: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  trenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overlay: {
    width: '100%',
    height: '120%',
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContent: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 100,
  },
  backButton: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 10,
    top: 0,
  },
  sharedElement: {alignItems: 'center', justifyContent: 'center'},
});
