import React from 'react';

import { View } from 'react-native';
import { Input, Button } from '@rneui/themed';

export const Name = ({ navigation }) => {
  const [name, setName] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        placeholder="enter your name"
        rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Update"
        buttonStyle={{
          backgroundColor: '#00ABB3',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate({
            name: 'Profile',
            params: { id: name },
            merge: true,
          });
        }}
      />
    </View>
  );
};
