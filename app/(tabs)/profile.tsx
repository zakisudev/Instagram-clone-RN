import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/Button';

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(
    'https://facesconsent.com/images/default-product-image.png'
  );
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View className="w-full items-center p-3 flex-1">
      <Image
        source={{ uri: avatar }}
        className="w-40 aspect-square rounded-full"
        resizeMode="contain"
      />
      <Text
        className="text-xl px-3 py-3 my-2 text-center text-cyan-800 w-fit mx-auto bg-gray-200 rounded"
        onPress={pickImage}
      >
        Change Profile image
      </Text>

      <View className="w-full p-3">
        <Text className="text-xl">Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder="Email"
          className="p-3 bg-gray-200 rounded-lg h-16 w-full text-xl"
        />
      </View>

      <View className="w-full p-3">
        <Text className="text-xl">Username</Text>
        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          placeholder="Username"
          className="p-3 bg-gray-200 rounded-lg h-16 w-full text-xl"
        />
      </View>

      <View className="items-center px-3 mt-auto w-full gap-3">
        <Button title="Save Changes" onPress={() => console.log('Save')} />
        <Button title="Logout" onPress={() => console.log('Logout')} />
      </View>
    </View>
  );
};

export default ProfileScreen;
