import {
  Text,
  View,
  StatusBar,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../client";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState();

  // hook to hide screen navigation header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        restaurants[]-> {
          ..., 
          dishes[]->,
      type-> {
        name
      }
        },
      }[0]
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search bar */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restraurants and cusines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-100 flex-1">
          {/* Categories */}
          <Categories />

          {/* Features row */}

          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}

          <FeaturedRow
            id="123"
            title="Featrued"
            description="Paid plaement from our partners"
            // featuredCategory="featured"
          />
          <FeaturedRow
            id="456"
            title="Tasty Discounts"
            description="Everyone's been enjoying these juciy discounts"
            // featuredCategory="discounts"
          />
          <FeaturedRow
            id="789"
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
            // featuredCategory="offers"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
