import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@rneui/themed';
import ToastManager, { Toast } from 'toastify-react-native';

import UploadImage from '../components/Image';

export const Profile = ({ route, navigation }) => {
  const showToasts = () => {
    Toast.success('updated entry!', 'center');
  };

  if (
    route.params?.id ||
    route.params?.idPhone ||
    route.params?.idEmail ||
    route.params?.idAbout
  ) {
    showToasts();
  }

  return (
    <View style={styles.container}>
      <ToastManager />
      <View style={styles.image}>
        <UploadImage />
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={styles.label}>Name</Text>
          <Input
            onPressIn={() => navigation.push('Name')}
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            value={route.params?.id}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <Input
            onPressIn={() => navigation.push('Email')}
            leftIcon={{ type: 'MaterialIcons', name: 'email' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            value={route.params?.idEmail}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <Input
            onPressIn={() => navigation.push('Phone')}
            leftIcon={{ type: 'font-awesome', name: 'phone' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            value={route.params?.idPhone}
          />
        </View>
        <View>
          <Text style={styles.label}>Tell us about yourself</Text>
          <Input
            onPressIn={() => navigation.push('About')}
            leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            value={route.params?.idAbout}
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
