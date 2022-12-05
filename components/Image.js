import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { GlobalContext } from '../context/GlobalContext';

const UploadImage = () => {
  const { image, setImage } = useContext(GlobalContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View styles={style.container}>
      <Avatar
        size={150}
        rounded
        source={image ? { uri: image } : null}
        containerStyle={style.avatarContainer}
      >
        <Avatar.Accessory
          containerStyle={style.avatarAccessory}
          size={40}
          onPress={pickImage}
        />
      </Avatar>
    </View>
  );
};

export default UploadImage;

const style = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'absolute',
  },
  avatarContainer: {
    backgroundColor: '#ffff',
    borderStyle: 'solid',
    borderColor: '#8C0327',
    borderWidth: 6,
  },
  avatarAccessory: {
    borderRadius: 100,
    backgroundColor: '#8C0327',
  },
});
