import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function SignInUpButton({ buttonName, background }) {
  return (
    <TouchableHighlight
      style={background === 'empty' ? styles.emptyButton : styles.filledButton}
    >
      <Text
        style={background === 'empty' ? styles.emptyText : styles.filledText}
      >
        {buttonName}
      </Text>
    </TouchableHighlight>
  );
}

const EMPTY_BUTTON_BG_COLOR = 'white';
const EMPTY_BUTTON_TEXT_COLOR = 'dodgerblue';
const FILLED_BUTTON_BG_COLOR = 'dodgerblue';
const FILLED_BUTTON_TEXT_COLOR = 'white';


const styles = StyleSheet.create({
  emptyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: EMPTY_BUTTON_TEXT_COLOR,
    backgroundColor: EMPTY_BUTTON_BG_COLOR,
  },
  filledButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: FILLED_BUTTON_BG_COLOR,
    backgroundColor: FILLED_BUTTON_BG_COLOR,
  },
  emptyText: {
    fontWeight: 'bold',
    color: EMPTY_BUTTON_TEXT_COLOR,
  },
  filledText: {
    fontWeight: 'bold',
    color: FILLED_BUTTON_TEXT_COLOR,
  }
});

export default SignInUpButton;
