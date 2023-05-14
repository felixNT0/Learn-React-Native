/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMutation} from 'react-query';
import {signUpUser} from '../../queries/SignUpQueries/SignUpQueries';
import AppButton from '../AppButton/AppButton';
import AppCheckBoxAndText from '../AppCheckBoxAndText/AppCheckBoxAndText';
import AppLabelTextInput from '../AppLabelTextInput/AppLabelTextInput';
import AppPasswordInput from '../AppPasswordInput/AppPasswordInput';
import OnSuccess from '../OnSuccess/OnSuccess';
// import { setAuthToken } from '../../utils/authToken';

function SignUp({navigation}: any) {
  const [checked, setChecked] = useState({
    length: false,
    upperCase: false,
    unique: false,
  });

  const [next, setNext] = useState('First_Screen');

  const [values, setValues] = useState({
    email_address: '',
    password: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    phone_number: '',
    username: '',
  });

  const [openDateModal, setOpenDateModal] = useState(false);

  const validateInput = () => {
    const length = values.password.length >= 8;
    const uppercaseRegex = /[A-Z]/.test(values.password);
    const uniqueCharRegex = /[!@#$%^&*?]/.test(values.password);
    if (length && uniqueCharRegex && uppercaseRegex) {
      return true;
    }
  };

  const hideKeyboard = () => {
    Keyboard.dismiss(); // hide the keyboard
  };

  const currentDate = new Date();

  console.log(navigation);

  const {isLoading, isSuccess} = useMutation(signUpUser, {
    onSuccess: (data: any) => {
      console.log(data);
      // setAuthToken();
    },
  });

  const handleSubmit = () => {
    console.log(values);
    setNext('Success_Screen');
    // mutate(values);
  };

  const openDate = () => setOpenDateModal(true);

  useEffect(() => {
    if (values.password) {
      const length = values.password.length >= 8;
      const uppercaseRegex = /[A-Z]/.test(values.password);
      const uniqueCharRegex = /[!@#$%^&*?]/.test(values.password);

      if (length) {
        setChecked((prev: any) => ({...prev, length: true}));
      }
      if (!length) {
        setChecked((prev: any) => ({...prev, length: false}));
      }
      if (uppercaseRegex) {
        setChecked((prev: any) => ({...prev, upperCase: true}));
      }
      if (!uppercaseRegex) {
        setChecked((prev: any) => ({...prev, upperCase: false}));
      }
      if (uniqueCharRegex) {
        setChecked((prev: any) => ({...prev, unique: true}));
      }
      if (!uniqueCharRegex) {
        setChecked((prev: any) => ({...prev, unique: false}));
      }
    }
  }, [values.password]);

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ScrollView>
        <View style={styles.container}>
          {next === 'First_Screen' && (
            <>
              <Text style={styles.title}>Create an account</Text>
              <Text style={styles.description}>
                Start building your dollar-denominated investment portfolio
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
                  disabled={
                    !(
                      values.email_address &&
                      values.password &&
                      validateInput()
                    )
                  }
                  label="Continue"
                  onPress={() => setNext('Second_Screen')}
                />

                <View>
                  <AppCheckBoxAndText
                    text="Minimum of 8 characters"
                    checked={checked.length}
                  />
                  <AppCheckBoxAndText
                    text="One UPPERCASE character"
                    checked={checked.upperCase}
                  />
                  <AppCheckBoxAndText
                    text="One unique character (e.g: !@#$%^&*?)"
                    checked={checked.unique}
                  />
                </View>

                <Text style={styles.already_have_account}>
                  Already have an account?{' '}
                  <Text style={{color: '#0898A0'}}>Sign In</Text>
                </Text>
              </View>
            </>
          )}

          <>
            {next === 'Second_Screen' && (
              <>
                <Text style={styles.title}>Tell Us More About You</Text>
                <Text style={styles.description}>
                  Please use your name as it appears on your ID.
                </Text>
                <View style={styles.all_input}>
                  <AppLabelTextInput
                    label="Legal First Name"
                    placeholder="Legal First Name"
                    value={values.first_name}
                    onChangeText={(e: any) =>
                      setValues((prev: any) => ({...prev, first_name: e}))
                    }
                  />
                  <AppLabelTextInput
                    label="Legal Last Name"
                    placeholder="Legal Last Name"
                    value={values.last_name}
                    onChangeText={(e: any) =>
                      setValues((prev: any) => ({...prev, last_name: e}))
                    }
                  />
                  <AppLabelTextInput
                    label="Nick name"
                    placeholder="Nick name"
                    value={values.username}
                    onChangeText={(e: any) =>
                      setValues((prev: any) => ({...prev, username: e}))
                    }
                  />
                  <View style={styles.phone_number_container}>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Phone Number</Text>
                    </View>

                    <PhoneInput
                      defaultValue={values.phone_number}
                      defaultCode="NG"
                      containerStyle={[
                        styles.input_container,
                        {borderWidth: 1},
                      ]}
                      textInputStyle={{
                        marginTop: -5,
                        bottom: -5,
                        overflow: 'hidden',
                      }}
                      // layout="first"
                      onChangeText={text => {
                        setValues((prev: any) => ({
                          ...prev,
                          phone_number: text,
                        }));
                      }}
                      onChangeFormattedText={(text: any) => {
                        setValues((prev: any) => ({
                          ...prev,
                          phone_number: text,
                        }));
                      }}
                    />
                  </View>
                  <View onTouchStart={openDate}>
                    <AppLabelTextInput
                      label="Date of Birth"
                      placeholder="Choose date"
                      value={values.date_of_birth}
                    />

                    <Icon
                      style={styles.showPasswordButton}
                      name="calendar-outline"
                      size={30}
                      color={'rgba(8, 152, 160, 1)'}
                    />
                  </View>
                  <DatePicker
                    modal
                    open={openDateModal}
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    onConfirm={(date: any) => {
                      setOpenDateModal(false);
                    }}
                    onCancel={() => {
                      setOpenDateModal(false);
                    }}
                    date={currentDate}
                    onDateChange={date =>
                      setValues((prev: any) => ({...prev, date_of_birth: date}))
                    }
                  />
                  <AppButton
                    label="Sign Up"
                    onPress={handleSubmit}
                    disabled={
                      !(
                        values.first_name &&
                        values.date_of_birth &&
                        values.last_name &&
                        values.username &&
                        values.phone_number
                      ) || isLoading
                    }
                  />

                  <Text style={styles.already_have_account}>
                    By clicking Continue, you agree to our{' '}
                    <Text style={{color: '#0898A0'}}>Terms of Service</Text> and{' '}
                    <Text style={{color: '#0898A0'}}>Privacy Policy.</Text>
                  </Text>
                </View>
              </>
            )}
          </>

          {next === 'Success_Screen' && isSuccess && (
            <OnSuccess
              HeaderText={'You just created your Rise account'}
              BodyText="Welcome to Rise, let’s take you home"
              buttonText="Okay"
            />
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 30,
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

  already_have_account: {
    color: '#71879C',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 130,
    marginBottom: 15,
  },

  phone_number_container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    flexDirection: 'column',
  },
  labelContainer: {
    position: 'absolute',
    top: -1,
    left: 35,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0898A0',
  },
  input_container: {
    fontSize: 16,
    width: '100%',
    height: 65,
    fontWeight: '400',
    color: '#000000',
    borderColor: '#0898A0',
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  showPasswordButton: {
    marginLeft: 8,
    position: 'absolute',
    top: 25,
    right: 35,
  },
});

export default SignUp;
