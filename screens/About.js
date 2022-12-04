import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { Button, Card } from '@rneui/themed';

export const About = ({ navigation }) => {
  const [about, setAbout] = React.useState('');
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>
          How do you take your <Text style={{ color: '#8C0327' }}>coffee</Text>{' '}
          ?
        </Text>
        <Card.Divider />

        <TextInput
          style={styles.textInput}
          placeholder="Black with 3 sugars ..."
          value={about}
          onChangeText={setAbout}
          multiline={true}
          numberOfLines={4}
        />
        <Button
          title="Update"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonFont}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate({
              name: 'Profile',
              params: { idAbout: about },
              merge: true,
            });
          }}
        />
      </Card>
      <Image
        style={styles.image}
        source={require('../assets/coffeerush/cup1.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
  },
  textInput: {
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 200,
    marginVertical: 10,
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#826A5C',
    borderRadius: 5,
  },
  buttonFont: {
    fontWeight: 'bold',
    fontSize: 23,
  },
});
