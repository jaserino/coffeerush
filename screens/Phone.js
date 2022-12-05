import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { GlobalContext } from '../context/GlobalContext';

export const Phone = ({ navigation }) => {
  const { phone, setPhone } = useContext(GlobalContext);

  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={require('../assets/coffeerush/beans.jpeg')}
      />
      <Input
        placeholder="enter your phone number"
        rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
        value={phone}
        onChangeText={setPhone}
      />
      <Button
        title="Update"
        buttonStyle={style.button}
        titleStyle={style.buttonTitle}
        containerStyle={style.buttonContainer}
        onPress={() => {
          navigation.navigate({
            name: 'Profile',
            params: { id: phone },
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
