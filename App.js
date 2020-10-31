/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      searchQuery: '',
      tweets: [],
    };
  }

  async getTweets(query = '#keyword') {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${query}&result_type=recent`;
    const options = {
      method: 'GET',
      headers: {
        'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAK7LJAEAAAAA74VS32y9JjelRMgzoXyprCqf8%2Bs%3DRumh9ppa01bdYB2d7uHJhhViqlrleuZXXrvaRWBRnTSNs2C3Nd',
        'content-type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getTweets();
  }

  render() {
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
            <Text>List of Tweets</Text>
            {new Array(8).fill(0).map((elm, index) => (
              <SampleText key={index} />
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
