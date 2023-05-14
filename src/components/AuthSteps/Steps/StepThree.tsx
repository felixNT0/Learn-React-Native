import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const StepThree = ({children}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Image-Step-3.png')}
        style={styles.image}
      />
      <View style={styles.progress_dot}>{children}</View>
      <Text style={styles.title}>Better Performance</Text>
      <Text style={styles.description}>
        You earn more returns, achieve more of your financial goals and protect
        your money from devaluation.
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
    color: 'rgba(8, 152, 160, 1)',
    marginBottom: 20,
    marginTop: 30,
    marginRight: 195,
  },
  description: {
    // fontFamily: "Tomato Grotesk",
    fontSize: 12,
    color: '#222222',
  },
});

export default StepThree;
