import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  name: string;
}

const Profile = ({name}: Props) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Profile;
