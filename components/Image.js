import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View styles={{ overflow: 'hidden', position: 'absolute' }}>
      <Avatar
        size={150}
        rounded
        source={{ uri: image }}
        containerStyle={{
          backgroundColor: '#ffff',
          borderStyle: 'solid',
          borderColor: '#8C0327',
          borderWidth: 6,
        }}
      >
        <Avatar.Accessory
          containerStyle={{ borderRadius: 100, backgroundColor: '#8C0327' }}
          size={40}
          onPress={pickImage}
        />
      </Avatar>
    </View>
  );
};

export default UploadImage;
