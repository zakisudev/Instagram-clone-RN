import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const PostListItem = ({ post }: any) => {
  return (
    <>
      <View className="w-full m-2 flex-row gap-4 items-center">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-16 aspect-square rounded-full"
        />
        <Text className="text-xl font-semibold">{post.user.username}</Text>
      </View>
      <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-[4/3]"
        resizeMode="cover"
      />
      <View className="p-3 w-full">
        <View className="flex-row gap-4 my-2">
          <AntDesign name="hearto" size={24} color="black" />
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Feather name="send" size={24} />

          <Feather
            name="bookmark"
            size={24}
            color="black"
            className="ml-auto"
          />
        </View>
        <Text className="text-lg font-semibold">
          {post.caption.length > 20
            ? `${post.caption.slice(0, 45)}...`
            : post.caption}
        </Text>
      </View>
    </>
  );
};

export default PostListItem;
