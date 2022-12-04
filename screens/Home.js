import React from 'react';
import { View, Text, Image, StyleSheet, TextComponent } from 'react-native';
import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: 350 }}>
        <Image
          style={{
            width: '100%',
            marginLeft: 30,
            resizeMode: 'contain',
            top: -200,
          }}
          source={require('../assets/coffeerush/cup0.webp')}
        />
      </View>
      <View style={style.textContainer}>
        <Text
          style={{
            color: '#0A0908',
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          The Fastest in{' '}
          <Text style={{ color: '#8C0327', fontWeight: 'bold' }}>Coffee </Text>
          Delivery
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>
          Our mission is to get you coffee ... FAST!
        </Text>
      </View>
      <Button
        title="Get Started"
        buttonStyle={{
          backgroundColor: '#5E503F',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        containerStyle={{
          marginHorizontal: 100,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
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
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    paddingBottom: 160,
    justifyContent: 'space-between',
  },
});
