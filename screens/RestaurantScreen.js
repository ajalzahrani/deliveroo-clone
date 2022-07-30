import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import {
  StarIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import DishCard from "../components/DishCard";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        className="bg-gray-300 p-2 absolute top-16 left-8 z-50 shadow-lg rounded-full"
      >
        <ArrowLeftIcon size={20} color="gray" />
      </TouchableOpacity>
      <Image
        source={require("../assets/mcdonalds.jpg")}
        className="h-60 max-w-full object-contain"
      />
      <View className="px-3 pb-1">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . Offers
          </Text>
          <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color="gray" opacity={0.4} size="22" />
            <Text className="text-xs text-gray-500">nearby . {address}</Text>
          </View>
        </View>
        <Text className="py-3 text-[13px] text-gray-500">
          {short_description}
        </Text>
      </View>
      <View className="flex-row items-center justify-between px-3 py-3 border border-gray-300">
        <View className="flex-row items-center space-x-1">
          <QuestionMarkCircleIcon size={20} color="gray" />
          <Text className="px-4 font-bold">Have a food allergy?</Text>
        </View>
        <ChevronRightIcon size={15} color="gray" />
      </View>
      <View className="bg-gray-200 py-5">
        <Text className="text-lg font-bold px-3">Menu</Text>
      </View>
      {/* Menu dishes */}
      <ScrollView>
        <DishCard />
        <DishCard />
        <DishCard />
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        className="bg-gray-400 p-2 absolute bottom-20 left-5 z-50 shadow-lg rounded-lg py-7 px-44"
      >
        <View className="flex-row items-center justify-items-center">
          <Text className="bg-gray-500 p-2 rounded-lg">3</Text>
          <Text>View Basket</Text>
          <Text>SR11.25</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantScreen;
