import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
// FIXME: handl error when image is not loaded or empty
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`p-4 border border-gray-200  bg-white ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">SR {price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                // require("../assets/mcdonalds.jpg")
                uri: urlFor(image ? image : null).url(),
              }}
              className="h-20 w-20 bg-gray-400 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>

            <Text className="">{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
