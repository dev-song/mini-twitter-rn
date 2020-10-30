import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function TabBarItem({ categoryName }) {
  return (
    <TouchableHighlight style={styles.item}>
      <Text>{categoryName}</Text>
    </TouchableHighlight>
  );
}

const ITEM_HIGHLIGHT_COLOR = 'dodgerblue';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: ITEM_HIGHLIGHT_COLOR,
  }
});

export default TabBarItem;