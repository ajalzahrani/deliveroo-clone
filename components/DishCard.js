import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";

const DishCard = () => {
  return (
    <View className="p-3 border  border-gray-300">
      <View className="flex-row items-center justify-between">
        <View style={{ alignSelf: "stretch", flexWrap: "wrap" }}>
          <Text>PERi-PERi Nuts</Text>
          <Text className="text-gray-500 text-xs">
            Chrunchy almonds, cashews and macadamia nuts in a fiery PERi-PERi
            seasoning. Serves 2-3.
          </Text>
          <Text className="text-gray-500 text-xs pt-2">SR 3.75</Text>
        </View>
        <Image
          source={require("../assets/mcdonalds.jpg")}
          className="h-16 w-16"
        />
      </View>

      <View className="flex-row items-center pt-3">
        <TouchableOpacity>
          <MinusCircleIcon color="gray" size={35} />
        </TouchableOpacity>
        <Text className="p-2">3</Text>
        <TouchableOpacity>
          <PlusCircleIcon color="gray" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishCard;
