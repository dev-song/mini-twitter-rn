import React from 'react';
import { View, StyleSheet } from 'react-native';

import TabBarItem from './TabBarItem';

function CategoriesTabBar({ selectedCategory }) {
  const tabBarItems = [
    {
      en: 'top',
      kr: '인기',
    },
    {
      en: 'latest',
      kr: '최신',
    },
    {
      en: 'people',
      kr: '사용자',
    },
    {
      en: 'photos',
      kr: '사진',
    },
    {
      en: 'videos',
      kr: '동영상',
    },
  ];

  return (
    <View style={styles.tabBar}>
      {tabBarItems.map(({ en, kr }) => (
        <TabBarItem
          categoryName={kr}
          selected={selectedCategory === en ? true : false}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});

export default CategoriesTabBar;
