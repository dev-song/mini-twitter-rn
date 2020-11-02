import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function container({ user: { name, screen_name }, createdAt, text }) {
  function displayTime(time) {
    const regTime = new Date(time).getTime();
    const now = new Date().getTime();
    const timeDifference = now - regTime;

    const SECOND_IN_MS = 1000;
    const MINUTE_IN_MS = SECOND_IN_MS * 60;
    const HOUR_IN_MS = MINUTE_IN_MS * 60;
    const DAY_IN_MS = HOUR_IN_MS * 24;

    if (timeDifference > DAY_IN_MS)
      return `${regTime.getMonth()} ${regTime.getDate()}`;
    if (timeDifference > HOUR_IN_MS)
      return `${Math.floor(timeDifference / HOUR_IN_MS)}h`;
    if (timeDifference > MINUTE_IN_MS)
      return `${Math.floor(timeDifference / MINUTE_IN_MS)}m`;
    if (timeDifference > SECOND_IN_MS)
      return `${Math.floor(timeDifference / SECOND_IN_MS)}s`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tweetInfo}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.screenName} numberOfLines={1}>
          @{screen_name}
        </Text>
        <Text style={styles.time} numberOfLines={1}>
          ㆍ{displayTime(createdAt)}
        </Text>
      </View>
      <Text style={styles.tweetContent}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    paddingHorizontal: 10,
  },
  tweetInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    width: 'auto',
    maxWidth: '55%',
    fontWeight: 'bold',
  },
  screenName: {
    marginStart: '5%',
    width: 'auto',
    maxWidth: '20%',
    color: 'gray',
  },
  time: {
    width: '20%',
    color: 'gray',
  },
  tweetContent: {
    marginTop: 5,
  },
});

export default container;
