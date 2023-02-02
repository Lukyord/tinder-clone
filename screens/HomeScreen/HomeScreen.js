import { StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";
import Header from "./components/Header";
import Card from "./components/Card";

//eas build --profile development --platform android
//npx expo start --dev-client

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"transparent"} translucent />
      <Header user={user} />
      <Card />
    </SafeAreaView>
  );
}
