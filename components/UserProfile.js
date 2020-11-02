import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function UserProfile({ user: { profile_image_url } }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: profile_image_url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export default UserProfile;
