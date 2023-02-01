import { View, ImageBackground, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoogleAuthenticationButton from "./components/GoogleAuthenticationButton";

export default function LoginScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1">
      <StatusBar backgroundColor={"transparent"} translucent />
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <GoogleAuthenticationButton />
      </ImageBackground>
    </View>
  );
}
