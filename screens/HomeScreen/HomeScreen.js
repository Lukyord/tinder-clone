import { StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

//eas build --profile development --platform android
//npx expo start --dev-client

export default function HomeScreen() {
  const [profile, setProfile] = useState([]);
  const { user } = useAuth();
  const swipeRef = useRef(null);

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={"transparent"} translucent />
      <Header user={user} />
      <Card swipeRef={swipeRef} profile={profile} />
      <Footer swipeRef={swipeRef} />
    </SafeAreaView>
  );
}
