import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RoomOne from "./screens/RoomOne";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="roomeone" component={RoomOne} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
