import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
// FIXME: handl error when image is not loaded or empty
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const CategoryCard = ({ imgUrl, title }) => {
  // console.log("iam image", imgUrl);
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
          // uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
