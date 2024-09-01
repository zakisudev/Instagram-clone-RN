import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/Button';
import { uploadImage } from '@/lib/cloudinary';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(
    'https://facesconsent.com/images/default-product-image.png'
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const createPost = async () => {
    if (!image) return;

    const res = await uploadImage(image);

    return res?.public_id;
  };

  return (
    <View className="flex-1 bg-white w-full">
      <Image
        source={{ uri: image }}
        className="w-full h-96 shadow-lg"
        resizeMode="contain"
      />

      <Text
        className="text-xl px-3 py-3 my-2 text-center text-cyan-800 w-fit mx-auto bg-gray-200 rounded"
        onPress={pickImage}
      >
        Change Image
      </Text>
      <View className="items-center gap-3 w-full px-3">
        <TextInput
          value={caption}
          onChangeText={setCaption}
          placeholder="Write a caption..."
          className="p-3 bg-gray-200 rounded-lg h-16 w-full text-xl"
        />
      </View>

      <View className="items-center px-3 mt-auto">
        <Button title="Share" onPress={createPost} />
      </View>
    </View>
  );
};

export default CreatePost;
