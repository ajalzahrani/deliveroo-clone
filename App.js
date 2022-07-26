import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
