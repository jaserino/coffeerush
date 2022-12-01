import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#FFEBC1' }}>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={{
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#A64B2A',
            width: 150,
            height: 150,
            marginTop: 30,
            color: '#A64B2A',
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <View>
          <Text style={{ opacity: 0.5, marginBottom: 6, color: '#A64B2A' }}>
            Name
          </Text>
          <TextInput
            placeholder="John Smith"
            style={{
              fontSize: 20,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8E3200',
            }}
          ></TextInput>
        </View>
        <View>
          <Text style={{ opacity: 0.5, marginBottom: 6, color: '#A64B2A' }}>
            Email
          </Text>
          <TextInput
            placeholder="JohnSm88@aol.com"
            style={{
              fontSize: 20,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8E3200',
            }}
          ></TextInput>
        </View>
        <View>
          <Text style={{ opacity: 0.5, marginBottom: 6, color: '#A64B2A' }}>
            Phone
          </Text>
          <TextInput
            placeholder="xxx-xxx-xxxx"
            style={{
              fontSize: 20,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8E3200',
            }}
          ></TextInput>
        </View>
        <View>
          <Text style={{ opacity: 0.5, marginBottom: 6, color: '#A64B2A' }}>
            Favorite Order
          </Text>
          <TextInput
            placeholder="Whats your favorite order?"
            style={{
              fontSize: 20,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8E3200',
            }}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};
