import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
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
  const [disabled, setDisabled] = useState(false);
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
  return (
    <SafeAreaView style={{alignSelf: 'center'}}>
      <SharedElement
        id={`${category.id}.${category.categoryNameEN}`}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.header} onPress={() => navigation.goBack()}>
          {`⬅ ${category.categoryNameTR} / ${category.categoryNameEN}`}
        </Text>
      </SharedElement>
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
            <Color
              key={index}
              item={item}
              onPress={async () => {
                setDisabled(true);
                await speakTR(item.tr);
                await speakEN(item.en);
                setTimeout(() => {
                  setDisabled(false);
                }, 3000);
              }}
            />
          ) : category.categoryNameEN === 'Numbers' ? (
            <Number
              key={index}
              item={item}
              onPress={async () => {
                setDisabled(true);
                await speakTR(item.tr);
                await speakEN(item.en);
                setTimeout(() => {
                  setDisabled(false);
                }, 3000);
              }}
            />
          ) : category.categoryNameEN === 'Animals' ? (
            <Animal
              key={index}
              item={item}
              onPress={async () => {
                setDisabled(true);
                await speakTR(item.tr);
                await speakEN(item.en);
                setTimeout(() => {
                  setDisabled(false);
                }, 3000);
              }}
            />
          ) : (
            <Obj
              key={index}
              item={item}
              onPress={async () => {
                setDisabled(true);
                await speakTR(item.tr);
                await speakEN(item.en);
                setTimeout(() => {
                  setDisabled(false);
                }, 3000);
              }}
            />
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
    color: 'black',
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    zIndex: -10,
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
});
