import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function RiseWelcomeComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.image_and_text}>
        <Image
          source={require('../../assets/Rise-Logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Dollar investments that help you grow </Text>
      </View>
      <Text style={styles.other_text}>All rights reserved (c) 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0898A0',
    height: '100%',
  },
  image_and_text: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 123,
    height: 37.43,
    marginTop: 50,
    marginBottom: 50,
  },

  text: {
    // fontFamily: 'Tomato Grotesk',
    fontSize: 18,
    color: '#FFFFFF',
  },
  other_text: {
    // fontFamily: "Tomato Grotesk",
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 350,
  },
});
