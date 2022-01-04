import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  item: any;
  onPress: (item: any) => void;
}

const Animal = React.memo(({item, onPress}: Props) => {
  const [url, setUrl] = useState<string | undefined>(undefined);
  let handleImageData = async () => {
    let x = await item.url();
    setUrl(x);
  };
  useEffect(() => {
    handleImageData();
  }, []);
  return (
    <TouchableOpacity
      style={[styles.textContainer, {borderColor: item.value}]}
      onPress={onPress}>
      {url ? (
        <Image
          source={{uri: url}}
          width={50}
          height={50}
          style={styles.image}
        />
      ) : (
        <View style={[styles.image, styles.activity]}>
          <ActivityIndicator
            size={25}
            color={'red'}
            style={{alignSelf: 'center'}}
          />
        </View>
      )}
      <View style={[styles.trenContainer]}>
        <Text style={[styles.tren]}>{`${item.tr} / `}</Text>
        <Text style={[styles.tren]}>{item.en}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Animal;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'transparent',
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: '#bbb',
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    width: '75%',
    elevation: 10,
  },
  tren: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    color: '#000',
  },
  trenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
