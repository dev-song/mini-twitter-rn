import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function SignInUpButton({ buttonName }) {
  return (
    <TouchableHighlight style={styles.button}>
      <Text>{buttonName}</Text>
    </TouchableHighlight>
  );
}

const SIGN_IN_UP_BUTTON_BG_COLOR = 'white';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    backgroundColor: SIGN_IN_UP_BUTTON_BG_COLOR,
  }
});

export default SignInUpButton;