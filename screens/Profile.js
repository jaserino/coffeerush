import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { Input, Avatar } from '@rneui/themed';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Avatar
          size={150}
          rounded
          source={{
            uri: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          title="Bj"
          containerStyle={{
            backgroundColor: '#cdde20',
            borderColor: '#3C4048',
            borderStyle: 'solid',
            borderWidth: 5,
          }}
        >
          <Avatar.Accessory size={40} />
        </Avatar>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={styles.label}>Name</Text>
          <Input
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <Input
            leftIcon={{ type: 'MaterialIcons', name: 'email' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <Input
            leftIcon={{ type: 'font-awesome', name: 'phone' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
          />
        </View>
        <View>
          <Text style={styles.label}>Tell us about yourself</Text>
          <Input
            leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  profilecontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ABB3',
  },
  image: {
    marginTop: 30,
    padding: 30,
    alignItems: 'center',
  },
  label: {
    opacity: 0.8,
    marginLeft: 7,
    color: '#B2B2B2',
  },
});
