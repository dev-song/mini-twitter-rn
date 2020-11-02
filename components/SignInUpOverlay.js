import React from 'react';
import { View, StyleSheet } from 'react-native';

import SignInUpButton from './SignInUpButton';

function SignInUpOverlay() {
  return (
    <View style={styles.overlay}>
      <View style={styles.buttonContainer}>
        <SignInUpButton buttonName="로그인하기" background="empty" />
      </View>
      <View style={styles.buttonContainer}>
        <SignInUpButton buttonName="가입하기" background="filled" />
      </View>
    </View>
  );
}

const OVERLAY_BG_COLOR = 'white';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,

    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    backgroundColor: OVERLAY_BG_COLOR,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default SignInUpOverlay;
