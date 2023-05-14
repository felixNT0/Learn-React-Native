import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const StepOne = ({children}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Image-Step-1.png')}
        style={styles.image}
      />
      <View style={styles.progress_dot}>{children}</View>
      <Text style={styles.title}>Quality assets</Text>
      <Text style={styles.description}>
        Rise invests your money into the best dollar investments around the
        world.
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
    color: 'rgba(254, 113, 34, 1)',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 30,
    marginRight: 264,
  },
  description: {
    // fontFamily: "Tomato Grotesk",
    fontSize: 12,
    color: '#222222',
  },
});

export default StepOne;
