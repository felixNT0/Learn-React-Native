import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthSteps from '../../components/AuthSteps/AuthSteps';
import RiseWelcomeComponent from '../../components/RiseWelcomeComponent/RiseWelcomeComponent';

export default function WelcomeScreen({navigation}: any) {
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 3000);
  }, [showScreen]);

  return (
    <View style={styles.container}>
      {showScreen ? (
        <AuthSteps navigation={navigation} />
      ) : (
        <RiseWelcomeComponent />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
