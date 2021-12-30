import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  source: any;
}

const Post = ({ source }: Props) => {
  return (
    <Image
      source={source}
      width={50}
      height={50}
      style={{
        width: '33.3%',
        height: 138,
        borderWidth: 0.5,
      }}
    />
  );
};

export default Post;

const styles = StyleSheet.create({
  imgContainer: {
    borderWidth: 1,
    overflow: 'hidden',
    flexWrap: 'nowrap',
  },
});
