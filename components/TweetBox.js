import React from 'react';
import { View, StyleSheet } from 'react-native';

import UserProfile from './UserProfile';
import TweetContent from './TweetContent';

function TweetBox({ created_at, user, text, retweet_count, favorite_count }) {
  return (
    <View style={styles.tweet}>
      <UserProfile user={user} />
      <TweetContent user={user} createdAt={created_at} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  tweet: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default TweetBox;
