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
import React from "react";
import RoomOne from "./RoomOne";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

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
