import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Header() {
  return (
    <View style={styles.header}>
      {/* Go Back button */}
      <Icon style={styles.leftArrow} name="arrow-left" size={30} />
      <View style={styles.input}>
        <Icon style={styles.search} name="search" size={20} color={'gray'} />
        <TextInput placeholder="Search" />
      </View>
      <Icon style={styles.ellipsis} name="ellipsis-h" size={30} />
      {/* More button */}
    </View>
  );
}

const HEADER_BG_COLOR = 'dodgerblue';
const INPUT_BG_COLOR = 'silver';

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: HEADER_BG_COLOR,
    textAlign: 'center',
  },
  leftArrow: {
    flex: 1,
  },
  search: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  input: {
    position: 'relative',
    flex: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingStart: 40,
    borderRadius: 40,
    backgroundColor: INPUT_BG_COLOR,
  },
  ellipsis: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Header;
