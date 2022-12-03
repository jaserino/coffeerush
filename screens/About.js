import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';

export const About = ({ navigation }) => {
  const [about, setAbout] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40 }}>Tell us about yourself</Text>
      <View style={styles.textarea}>
        <TextInput
          style={{ textAlignVertical: 'top' }}
          width={300}
          placeholder="Tell us about yourself ..."
          value={about}
          onChangeText={setAbout}
          autoFocus={true}
          clearButtonMode="while-editing"
          multiline={true}
          numberOfLines={4}
        />
      </View>
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
            params: { idAbout: about },
            merge: true,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textarea: {
    borderColor: '#3C4048',
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 0.5,
  },
});
