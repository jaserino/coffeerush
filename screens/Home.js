import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = ({ route, navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={{ height: 350 }}>
        <Image
          style={style.image}
          source={require('../assets/coffeerush/cup0.webp')}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.textTop}>
          The Fastest in{' '}
          <Text style={{ color: '#8C0327', fontWeight: 'bold' }}>Coffee </Text>
          Delivery
        </Text>
        <Text style={style.textBot}>
          Our mission is to get you coffee when you are in a RUSH!
        </Text>
      </View>
      <Button
        title="Get Started"
        buttonStyle={style.button}
        titleStyle={style.buttonTitle}
        containerStyle={style.buttonContainer}
        onPress={() => {
          navigation.navigate({
            name: 'Profile',
          });
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    paddingBottom: 160,
    justifyContent: 'space-between',
  },
  textTop: {
    color: '#0A0908',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBot: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    marginLeft: 30,
    resizeMode: 'contain',
    top: -200,
  },
  button: {
    backgroundColor: '#5E503F',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    marginHorizontal: 100,
    height: 50,
    width: 200,
    marginVertical: 10,
  },
});
