import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {}

const Stories = (props: Props) => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const renderItem = () => {
    return (
      <TouchableOpacity
        style={{ width: 100, height: 100, margin: 5, borderRadius: 100 }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'gray',
            padding: 2,
          }}
        >
          <Image
            width={50}
            height={50}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 100,
            }}
            source={require('../../Assets/Images/gtr.jpg')}
          />
        </View>
        <Text></Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={stories}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            margin: 5,
            borderRadius: 100,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'gray',
              padding: 2,
            }}
          >
            <Image
              width={50}
              height={50}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 100,
              }}
              source={require('../../Assets/Images/gtr.jpg')}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              letterSpacing: 1,
              color: 'white',
            }}
          >{`Story #${item}`}</Text>
        </TouchableOpacity>
      )}
      horizontal
      style={{ zIndex: 100, position: 'absolute' }}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({});
