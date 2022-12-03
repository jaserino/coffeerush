import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';

export const Email = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        placeholder="enter your email"
        rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
        value={email}
        onChangeText={setEmail}
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
            params: { idEmail: email },
            merge: true,
          });
        }}
      />
    </View>
  );
};
