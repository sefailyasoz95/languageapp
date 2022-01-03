import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {animals, colors, numbers, objects} from '../../Constants/data';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen = ({navigation, route}: Props) => {
  const {category} = route.params;
  const [dataSource, setDataSource] = useState<any[]>([]);
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
    <>
      <SharedElement id={`${category.id}.${category.categoryNameEN}`}>
        <Text style={styles.header} onPress={() => navigation.goBack()}>
          {`${category.categoryNameTR} / ${category.categoryNameEN}`}
        </Text>
      </SharedElement>
      {/* <FlatList
        data={dataSource}
        style={styles.dataContainer}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.textContainer}
            // onPress={() => navigation.goBack()}
          >
            <Text key={item} style={styles.text}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      /> */}
      <ScrollView
        style={styles.dataContainer}
        contentContainerStyle={styles.contentContainer}>
        {dataSource.map((item, index) => (
          <TouchableOpacity
            style={styles.textContainer}
            key={index}
            // onPress={() => navigation.goBack()}
          >
            <Text style={styles.text}>{item.value}</Text>
            <View style={styles.trenContainer}>
              <Text style={styles.tren}>{`${item.tr} / `}</Text>
              <Text style={styles.tren}>{item.en}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
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
  dataContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
  },
  contentContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
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
});
