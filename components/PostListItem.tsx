import { View, Text, Image, useWindowDimensions, FlatList } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import posts from '@/assets/data/posts.json';
import { cld } from '../lib/cloudinary';
import { AdvancedImage } from 'cloudinary-react-native';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';

const RenderItem = ({ post }: any) => {
  const { width } = useWindowDimensions();

  const image = cld.image(post?.image);
  image.resize(thumbnail().width(width).height(width));

  const avatar = cld.image(post?.user.avatar_url);
  avatar.resize(
    thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))
  );

  return (
    <>
      <View className="w-full m-2 flex-row gap-4 items-center">
        <AdvancedImage
          cldImg={avatar}
          style={{ width: 54, height: 54, borderRadius: 50 }}
        />
        <Text className="text-xl font-semibold">{post?.user.username}</Text>
      </View>

      <AdvancedImage cldImg={image} style={{ width: '100%', height: 200 }} />

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
          {post?.caption.length > 20
            ? `${post?.caption.slice(0, 45)}...`
            : post?.caption}
        </Text>
      </View>
    </>
  );
};

const PostListItem = () => {
  return (
    <View className="w-full">
      <FlatList
        data={posts}
        renderItem={({ item }) => <RenderItem post={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-3"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PostListItem;
