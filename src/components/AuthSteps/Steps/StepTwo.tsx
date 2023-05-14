import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const StepTwo = ({children}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Image-Step-2.png')}
        style={styles.image}
      />
      <View style={styles.progress_dot}>{children}</View>
      <Text style={styles.title}>Superior Selection</Text>
      <Text style={styles.description}>
        Our expert team and intelligent algorithms select assets that beat the
        markets.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 100,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  progress_dot: {
    marginTop: 50,
  },

  title: {
    // fontFamily: "Tomato Grotesk",
    fontSize: 20,
    color: 'rgba(184, 0, 116, 1)',
    marginBottom: 20,
    marginTop: 30,
    marginRight: 235,
  },

  description: {
    // fontFamily: "Tomato Grotesk",
    fontSize: 12,
    color: '#222222',
  },
});

export default StepTwo;
