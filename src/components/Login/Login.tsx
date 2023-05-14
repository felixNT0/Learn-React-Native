/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useMutation} from 'react-query';
import {loginUser} from '../../queries/LoginQueries/LoginQueries';
import AppButton from '../AppButton/AppButton';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppPasswordInput from '../AppPasswordInput/AppPasswordInput';
// import { setAuthToken } from '../../utils/authToken';

function Login({navigation}: any) {
  const [values, setValues] = useState({email_address: '', password: ''});

  const hideKeyboard = () => {
    Keyboard.dismiss(); // hide the keyboard
  };

  const {isLoading} = useMutation(loginUser, {
    onSuccess: (data: any) => {
      console.log(data);
      // setAuthToken()
    },
  });

  const handleSubmit = () => {
    console.log(values);
    console.log(navigation);
    // mutate(values);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.description}>
            Let’s get you logged in to get back to building your
            dollar-denominated investment portfolio.
          </Text>
          <View style={styles.all_input}>
            <AppLabelTextInput
              label="Email"
              placeholder="Email"
              value={values.email_address}
              textContentTypeEmail={true}
              onChangeText={(e: any) =>
                setValues((prev: any) => ({...prev, email_address: e}))
              }
            />
            <AppPasswordInput
              label="Password"
              placeholder="Password"
              value={values.password}
              onChangeText={(e: any) =>
                setValues((prev: any) => ({...prev, password: e}))
              }
            />
            <AppButton
              label="Sign In"
              disabled={!(values.email_address && values.password) || isLoading}
              onPress={handleSubmit}
            />

            <Text style={styles.forget_password_link}>
              I forgot my password
            </Text>

            <Text style={styles.already_have_account}>
              Don't have an account?{' '}
              <Text style={{color: '#0898A0'}}>Sign up</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 32,
  },

  description: {
    color: '#71879C',
    fontSize: 15,
  },

  input: {
    height: 40,
    width: '80%',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 16,
  },
  forget_password_link: {
    color: '#0898A0',
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center',
  },
  already_have_account: {
    color: '#71879C',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 170,
  },
});

export default Login;
