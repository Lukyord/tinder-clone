import { View, ImageBackground, StatusBar } from "react-native";
import React from "react";
import GoogleAuthenticationButton from "./components/GoogleAuthenticationButton";

export default function LoginScreen() {
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
