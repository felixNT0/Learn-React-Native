import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppButton = ({
  label,
  onPress,
  backgroundColor = '#0898A0',
  labelColor = '#FFFFFF',
  disabled,
  width,
}: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: backgroundColor,
          width: width,
          opacity: disabled ? 0.3 : 1,
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppButton;
