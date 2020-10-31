import React from 'react';
import { View, StyleSheet } from 'react-native';

import SignInUpButton from './SignInUpButton';

function SignInUpOverlay() {
  return (
    <View style={styles.overlay}>
      <View style={styles.buttonContainer}>
        <SignInUpButton buttonName='로그인하기' />
      </View>
      <View style={styles.buttonContainer}>
        <SignInUpButton buttonName='가입하기' />
      </View>
    </View>
  )
}

const OVERLAY_BG_COLOR = 'dodgerblue';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,

    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: OVERLAY_BG_COLOR,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  }
})

export default SignInUpOverlay;