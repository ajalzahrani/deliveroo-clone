import { View, Text } from "react-native";
import React from "react";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
