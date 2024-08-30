import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import posts from '@/assets/data/posts.json';
import PostListItem from '@/components/PostListItem';

const FeedScreen = () => {
  return (
    <View className="flex-1 bg-white items-center">
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-3"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;
