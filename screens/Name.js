import React from 'react';

import { View, Image, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';

export const Name = ({ navigation }) => {
  const [name, setName] = React.useState('');

  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={require('../assets/coffeerush/beans.jpeg')}
      />
      <Input
        placeholder="enter your name"
        rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Update"
        buttonStyle={style.button}
        titleStyle={style.buttonTitle}
        containerStyle={style.buttonContainer}
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  image: {
    width: '100%',
    height: '45%',
  },
  button: {
    backgroundColor: '#826A5C',
    borderRadius: 5,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonContainer: {
    marginHorizontal: 100,
    height: 50,
    width: 200,
    marginVertical: 10,
  },
});
