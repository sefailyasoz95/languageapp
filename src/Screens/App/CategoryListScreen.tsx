import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animal from '../../Components/Category/Animal';
import Color from '../../Components/Category/Color';
import Number from '../../Components/Category/Number';
import Obj from '../../Components/Category/Obj';
import {colors, numbers} from '../../Constants/data';
import useTts from '../../Hooks/useTts';
import {getAllAnimals} from '../../Redux/actions/animalActions';
import {useAppDispatch, useAppSelector} from '../../Redux/store/store';
import {AppStackParamList} from '../../StackParamLists/AppStackParamList';
import Loading from '../../Components/Loading/Loading';
import {getAllObjects} from '../../Redux/actions/objectActions';
import {heightPercentage, widthPercentage} from '../../Helpers/helpers';
import Input from '../../Components/Input/Input';
import useSpeechToText from '../../Hooks/useSpeechToText';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen = ({navigation, route}: Props) => {
  const {speakTR, speakEN} = useTts();
  const {category} = route.params;
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [disabled, setDisabled] = useState<any | undefined>(undefined);
  const dispatch = useAppDispatch();
  const {animals, isFetchingAnimals, isFetchingObjects, objects} =
    useAppSelector(state => state.global);
  const {
    isRecognizing,
    isSpeechRecognitionSupported,
    startRecognizing,
    results,
  } = useSpeechToText();
  useEffect(() => {
    if (category.en === 'Numbers') {
      setDataSource(numbers);
    } else if (category.en === 'Animals') {
      animals.length < 1 && dispatch(getAllAnimals());
      animals.length > 0 && setDataSource(animals);
    } else if (category.en === 'Colors') {
      setDataSource(colors);
    } else if (category.en === 'Objects') {
      objects.length < 1 && dispatch(getAllObjects());
      objects.length > 0 && setDataSource(objects);
    }
  }, [isFetchingAnimals, isFetchingObjects, animals, objects]);

  const onPress = React.useCallback(async item => {
    if (category.en === 'Animals') {
      setDisabled(item.image);
    } else if (category.en === 'Colors') {
      setDisabled(item.value);
    } else if (category.en === 'Numbers') {
      setDisabled(item.value);
    } else if (category.en === 'Objects') {
      setDisabled(item.image);
    }
    await speakTR(item.tr);
    await speakEN(item.en);
    setTimeout(() => {
      setDisabled(undefined);
    }, 3000);
  }, []);

  const filterItems = async (filterValue: string | number) => {
    let filtered: any;
    if (category.en === 'Colors') {
      filtered = colors.filter(data => {
        return data.tr === filterValue.toString().toLowerCase();
      });
    } else if (category.en === 'Numbers') {
      filtered = numbers.filter(data => {
        return (
          data.value === filterValue ||
          data.tr === filterValue.toString().toLowerCase()
        );
      });
    } else if (category.en === 'Animals') {
      filtered = animals.filter((data: any) => {
        return data.tr.toLowerCase() === filterValue.toString().toLowerCase();
      });
    } else if (category.en === 'Objects') {
      filtered = objects.filter((data: any) => {
        return data.tr.toLowerCase() === filterValue.toString().toLowerCase();
      });
    }
    setDataSource(filtered);
    if (filtered.length > 0) {
      await speakEN(filtered[0].en);
    } else {
      await speakTR('Üzgünüm, aradığın şeyi bulamadım. Tekrar dener misin?');
    }
  };

  useEffect(() => {
    if (results) {
      console.log('results: ', results);
      filterItems(results);
    }
  }, [results]);

  const handleSearch = () => {};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require('../../Assets/Images/backImage.png')}
            width={1}
            height={1}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text onPress={navigation.goBack}>Oyuna başla</Text>
      </View>
      <View style={styles.searchSection}>
        <Input
          corner="curved"
          onTextChanged={handleSearch}
          placeholder={results ? '' : 'ne aramak istersin?'}
          style={styles.input}
          defaultValue={results ? results : ''}
        />
        <TouchableOpacity onPress={startRecognizing}>
          {/* <Text style={[styles.searchIcon]}>{'🎙'}</Text> */}
          <Text style={[styles.searchIcon]}>{isRecognizing ? '✖️' : '🎙'}</Text>
        </TouchableOpacity>
      </View>
      {disabled && (
        <View style={styles.overlay}>
          {category.en === 'Animals' || category.en === 'Objects' ? (
            <Image
              width={50}
              height={50}
              source={{uri: disabled}}
              style={styles.overlayImage}
            />
          ) : (
            <Text style={styles.overlayContent}>{disabled}</Text>
          )}
        </View>
      )}
      {isFetchingObjects || isFetchingAnimals ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.dataContainer}
          contentContainerStyle={[
            styles.contentContainer,
            {
              flexDirection: category.en === 'Numbers' ? 'row' : 'column',
              flexWrap: category.en === 'Numbers' ? 'wrap' : 'nowrap',
            },
          ]}
          data={dataSource}
          renderItem={({item, index}: any) =>
            category.en === 'Colors' ? (
              <Color key={index} item={item} onPress={() => onPress(item)} />
            ) : category.en === 'Numbers' ? (
              <Number key={index} item={item} onPress={() => onPress(item)} />
            ) : category.en === 'Animals' ? (
              <Animal key={index} item={item} onPress={() => onPress(item)} />
            ) : (
              <Obj key={index} item={item} onPress={() => onPress(item)} />
            )
          }
        />
      )}
    </SafeAreaView>
  );
};

export default CategoryListScreen;

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    paddingBottom: 45,
    paddingTop: 5,
    alignSelf: 'center',
    width: '100%',
  },
  overlay: {
    width: '100%',
    height: heightPercentage(100),
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
    // fontSize: widthPercentage(10),
    width: 30,
    height: 30,
  },
  header: {
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  overlayImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.4,
    borderRadius: 10,
    alignSelf: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  input: {
    width: '85%',
    marginTop: 0,
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: 24,
  },
});
