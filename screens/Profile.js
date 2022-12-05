import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@rneui/themed';
import ToastManager, { Toast } from 'toastify-react-native';

import UploadImage from '../components/Image';
import { GlobalContext } from '../context/GlobalContext';

export const Profile = ({ navigation }) => {
  const { name, email, phone, about } = useContext(GlobalContext);

  const showToasts = () => {
    Toast.success('updated entry!', 'center');
  };

  if (name || phone || email || about) {
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
            inputStyle={{ color: '#303030' }}
            onPressIn={() => navigation.push('Name')}
            leftIcon={{ type: 'font-awesome', name: 'user', color: '#826A5C' }}
            rightIcon={{
              type: 'font-awesome',
              name: 'chevron-right',
              color: '#826A5C',
            }}
            value={name}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <Input
            inputStyle={{ color: '#303030' }}
            onPressIn={() => navigation.push('Email')}
            leftIcon={{
              type: 'MaterialIcons',
              name: 'email',
              color: '#826A5C',
            }}
            rightIcon={{
              type: 'font-awesome',
              name: 'chevron-right',
              color: '#826A5C',
            }}
            value={email}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <Input
            inputStyle={{ color: '#303030' }}
            onPressIn={() => navigation.push('Phone')}
            leftIcon={{ type: 'font-awesome', name: 'phone', color: '#826A5C' }}
            rightIcon={{
              type: 'font-awesome',
              name: 'chevron-right',
              color: '#826A5C',
            }}
            value={phone}
          />
        </View>
        <View>
          <Text style={styles.label}>Whats your ideal coffee order?</Text>
          <Input
            inputStyle={{ color: '#303030' }}
            onPressIn={() => navigation.push('About')}
            leftIcon={{
              type: 'font-awesome',
              name: 'pencil',
              color: '#826A5C',
            }}
            rightIcon={{
              type: 'font-awesome',
              name: 'chevron-right',
              color: '#826A5C',
            }}
            value={about}
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

  image: {
    marginTop: 30,
    padding: 30,
    alignItems: 'center',
  },
  label: {
    opacity: 0.8,
    marginLeft: 7,
    color: '#303030',
  },
});
