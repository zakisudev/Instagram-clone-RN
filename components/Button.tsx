import { View, Text, Pressable } from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable
      className="bg-blue-500 px-10 w-full py-3 rounded-lg"
      onPress={onPress}
    >
      <Text className="text-white text-xl text-center">{title}</Text>
    </Pressable>
  );
};

export default Button;
