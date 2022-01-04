import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getObject} from '../../Utils/objectAPI';

interface Props {
  item: any;
  onPress: (item: any) => void;
}

const Obj = React.memo(({item, onPress}: Props) => {
  const [url, setUrl] = useState<string | undefined>(
    'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NDEyOTIxMTU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
  );
  // let handleImageData = async () => {
  //   let res = await getObject(item.en);
  //   setUrl(res);
  // };
  // useEffect(() => {
  //   handleImageData();
  // }, []);
  return (
    <TouchableOpacity
      style={[styles.textContainer, {borderColor: item.value}]}
      onPress={onPress}>
      {url ? (
        <Image
          source={{
            uri: url,
          }}
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

export default Obj;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
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
