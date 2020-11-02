import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

import Header from './components/Header';
import CategoriesTabBar from './components/CategoriesTabBar';
import SignInUpOverlay from './components/SignInUpOverlay';
import TweetBox from './components/TweetBox';

import { tweets } from './data/tweets';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      searchQuery: '',
      selectedCategory: 'latest',
      tweets,
    };
  }

  render() {
    const {
      selectedCategory,
      tweets: { statuses },
    } = this.state;

    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.safeArea}>
          <Header />
          <CategoriesTabBar selectedCategory={selectedCategory} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}
          >
            {statuses.map((tweet) => (
              <TweetBox {...tweet} />
            ))}
          </ScrollView>
          <SignInUpOverlay />
        </SafeAreaView>
      </>
    );
  }
}

const APP_BG_COLOR = 'white';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_BG_COLOR,
  },
});

export default App;
