import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserProfile from './UserProfile';

function TweetBox({ created_at, user, user: { name, screen_name }, text, retweet_count, favorite_count }) {
  return (
    <View>
      <UserProfile user={user} />
      <View>
        <Text>{name}</Text>
        <Text>@{screen_name}</Text>
        <Text>{created_at}</Text>
      </View>
      <Text>{text}</Text>
    </View>
  );
}

export default TweetBox;