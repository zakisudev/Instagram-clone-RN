import { Alert, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PostListItem from '@/components/PostListItem';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';

const FeedScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = async () => {
    let { data, error } = await supabase
      .from('posts')
      .select('*, user:profiles(*)');

    if (error) {
      Alert.alert('Something went wrong');
    }

    setPosts(data?.reverse() || []);
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <View className="bg-white items-center w-full">
      <PostListItem posts={posts} />
    </View>
  );
};

export default FeedScreen;
