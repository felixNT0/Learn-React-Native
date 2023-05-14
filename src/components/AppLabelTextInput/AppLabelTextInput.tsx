import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

// type textContentType = {
//   emailAddress?: string;
//   name?: string;
// };

const AppLabelTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  textContentTypeEmail,
}: any) => {
  const [borderWidth, setBorderWidth] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={[styles.input, {borderWidth: borderWidth}]}
        placeholder={placeholder}
        value={value}
        textContentType={textContentTypeEmail ? 'emailAddress' : 'name'}
        onBlur={() => {
          setBorderWidth(1);
        }}
        onFocus={() => {
          setBorderWidth(3);
        }}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AppLabelTextInput;
