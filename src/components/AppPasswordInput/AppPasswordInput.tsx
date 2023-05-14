import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppPasswordInput = ({placeholder, value, onChangeText, label}: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [borderWidth, setBorderWidth] = useState(1);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={[styles.input, {borderWidth: borderWidth}]}
        placeholder={placeholder}
        value={value}
        textContentType="newPassword"
        onBlur={() => {
          setBorderWidth(1);
        }}
        onFocus={() => {
          setBorderWidth(3);
        }}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        style={styles.showPasswordButton}
        onPress={toggleShowPassword}>
        <Icon
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color={'#0898A0'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showPasswordButton: {
    marginLeft: 8,
    position: 'absolute',
    top: 25,
    right: 35,
  },
  container: {
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
  input: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    borderColor: '#0898A0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 16,
  },
});

export default AppPasswordInput;
