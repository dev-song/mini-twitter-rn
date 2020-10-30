import React from 'react';
import { View, StyleSheet } from 'react-native';

import TabBarItem from './TabBarItem';

function CategoriesTabBar() {
  return (
    <View style={styles.tabBar}>
      <TabBarItem categoryName='인기' />
      <TabBarItem categoryName='최신' />
      <TabBarItem categoryName='사용자' />
      <TabBarItem categoryName='사진' />
      <TabBarItem categoryName='동영상' />
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  }
})

export default CategoriesTabBar;