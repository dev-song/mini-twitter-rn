import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function TabBarItem({ categoryName, selected }) {
  return (
    <TouchableHighlight style={selected ? styles.selected : styles.normal}>
      <Text style={selected ? styles.selectedText : styles.normalText}>
        {categoryName}
      </Text>
    </TouchableHighlight>
  );
}

const ITEM_HIGHLIGHT_COLOR = 'dodgerblue';

const styles = StyleSheet.create({
  selected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: ITEM_HIGHLIGHT_COLOR,
  },
  normal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedText: {
    fontWeight: 'bold',
    color: ITEM_HIGHLIGHT_COLOR,
  },
  normalText: {
    fontWeight: 'bold',
  }
});

export default TabBarItem;
