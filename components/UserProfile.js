import React from 'react';
import { View, Image } from 'react-native';

function UserProfile({ profile_image_url }) {
  return (
    <View>
      <Image source={{ uri: profile_image_url }} />
    </View>
  );
}

export default UserProfile;
