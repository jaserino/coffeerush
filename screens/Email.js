import React from 'react';
import { View, Image } from 'react-native';
import { Input, Button } from '@rneui/themed';

export const Email = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
      }}
    >
      <Image
        style={{
          width: '100%',
          height: '45%',
        }}
        source={require('../assets/coffeerush/beans.jpeg')}
      />
      <Input
        placeholder="enter your email"
        rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Update"
        buttonStyle={{
          backgroundColor: '#8C0327',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 100,
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
