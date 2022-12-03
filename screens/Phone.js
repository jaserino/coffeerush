import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '@rneui/themed';

export const Phone = ({ navigation }) => {
  const [phone, setPhone] = React.useState('');

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      <Text style={{ fontSize: 40 }}>Please Update Phone Number</Text>
      <Input
        placeholder="enter your phone number"
        rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
        value={phone}
        onChangeText={setPhone}
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
            params: { idPhone: phone },
            merge: true,
          });
        }}
      />
    </View>
  );
};

/// make style sheet
