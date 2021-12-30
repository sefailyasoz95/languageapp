import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const About = (props: Props) => {
  return (
    <View style={styles.about}>
      <Text style={styles.aboutText}>Fit Engineer 🐺 </Text>
      <Text style={{ color: 'rgba(200,200,200,0.7)' }}>Athlete</Text>
      <Text style={styles.aboutText}>🏋 Fitness | Cars | Music </Text>
      <Text style={styles.aboutText}>💻 Software Developer</Text>
      <Text style={styles.aboutText}>📍 Istanbul, Turkey</Text>
      <Text style={styles.aboutText}> ▶ {` `}YouTube.com/sefailyasoz</Text>
      <Text style={styles.aboutLink}>sefailyasoz.netlify.app/</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  about: {
    marginLeft: 5,
  },
  aboutText: {
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
    marginVertical: 1,
  },
  aboutLink: {
    alignItems: 'center',
    fontSize: 14,
    color: 'lightblue',
  },
});
