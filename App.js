import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import CategoriesTabBar from './components/CategoriesTabBar';
import SignInUpOverlay from './components/SignInUpOverlay';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CategoriesTabBar />
      <ScrollView>
        <Text>List of Tweets</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, necessitatibus incidunt provident vel voluptate id cumque eveniet exercitationem non, ex explicabo rerum, aliquid dicta in eaque eius consequatur voluptatibus tenetur vero deleniti expedita commodi asperiores nulla. Adipisci omnis laudantium magni.</Text>
        <StatusBar style="auto" />
      </ScrollView>
      <SignInUpOverlay />
    </View>
  );
}

const APP_BG_COLOR = 'white';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
