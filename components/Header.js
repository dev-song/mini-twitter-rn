import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      {/* Go Back button */}
      <TextInput style={styles.input} placeholder="Search" />
      {/* More button */}
    </View>
  )
}

const HEADER_BG_COLOR = 'dodgerblue';
const INPUT_BG_COLOR = 'silver';

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',

    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: HEADER_BG_COLOR,
  },
  input: {
    backgroundColor: INPUT_BG_COLOR,
  }
})

export default Header;