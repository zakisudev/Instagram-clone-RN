import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = ({ children }: any) => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
