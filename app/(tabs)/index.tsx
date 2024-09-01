import { View } from 'react-native';
import React from 'react';
import PostListItem from '@/components/PostListItem';

const FeedScreen = () => {
  return (
    <View className="bg-white items-center w-full">
      <PostListItem />
    </View>
  );
};

export default FeedScreen;
