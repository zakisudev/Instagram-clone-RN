import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

const CreatePost = () => {
  const [caption, setCaption] = useState('');

  return (
    <View className="flex-1 bg-white w-full">
      <Image
        source={{
          uri: 'https://facesconsent.com/images/default-product-image.png',
        }}
        className="w-full h-96 shadow-lg"
        resizeMode="cover"
      />

      <Text className="text-xl px-3 py-3 my-2 text-center text-cyan-800 w-48 mx-auto bg-gray-200 rounded">
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
        <Pressable className="bg-blue-500 px-10 w-full py-3 rounded-lg">
          <Text className="text-white text-xl text-center">Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePost;
