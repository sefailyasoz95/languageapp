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
import Voice from '@react-native-voice/voice';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'CategoryList'>;
  route: RouteProp<AppStackParamList, 'CategoryList'>;
};

const CategoryListScreen = ({navigation, route}: Props) => {
  const {speakTR, speakEN} = useTts();
  const {category} = route.params;
  const [listened, setListened] = useState('');
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [disabled, setDisabled] = useState<any | undefined>(undefined);
  const dispatch = useAppDispatch();
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const {animals, isFetchingAnimals, isFetchingObjects, objects} =
    useAppSelector(state => state.global);
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
  const onSpeechStart = (e: any) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e: any) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };
  const onSpeechError = (e: any) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };
  const onSpeechResults = (e: any) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };
  const onSpeechPartialResults = (e: any) => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };
  const onSpeechVolumeChanged = (e: any) => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
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
  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('en-US');
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const handleListening = async () => {
    await startRecognizing();
  };
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
          placeholder="ne aratmak istersin ?"
          style={styles.input}
          defaultValue={listened}
        />
        <TouchableOpacity onPress={handleListening}>
          <Text style={styles.searchIcon}>🎙</Text>
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
