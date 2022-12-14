import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
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
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { selectBasketItems } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const items = useSelector(selectBasketItems);

  return (
    <>
      {items.length > 0 ? <BasketIcon /> : <></>}
      <ScrollView>
        <View className="relative">
          <TouchableOpacity
            onPress={navigation.goBack}
            className="bg-gray-100 p-2 absolute top-14 left-5 z-50 shadow-lg rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
          <Image
            source={require("../assets/mcdonalds.jpg")} // TODO: change to dynamic
            className="h-56 w-full bg-gray-300 p-4"
          />
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="mt-2 pb-4 text-gray-500">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
            <Text className="flex-1 pl-2 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 pb-3 font-bold text-xl">Menu</Text>

          {/* DishRow */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
