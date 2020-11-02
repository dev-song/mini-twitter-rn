import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import CategoriesTabBar from './components/CategoriesTabBar';
import SignInUpOverlay from './components/SignInUpOverlay';
import SampleText from './components/SampleText';
import TweetBox from './components/TweetBox';

import { tweets } from './data/tweets';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      searchQuery: '',
      tweets,
    };
  }

  render() {
    const { statuses } = this.state.tweets;

    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.safeArea}>
          <Header />
          <CategoriesTabBar />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}
          >
            {statuses.map(tweet => (
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
