import { View, Text } from "react-native";
import React from "react";
import Header from "../ChatScreen/components/Header";
import getMatchUserInfo from "../../lib/getMatchUserInfo";
import useAuth from "../../hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import TypingArea from "./components/TypingArea";

export default function MessageScreen() {
  const { user } = useAuth();
  const { params } = useRoute();

  const { matchDetails } = params;

  return (
    <View className="flex-1">
      <Header
        title={getMatchUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled
      />
      <TypingArea matchDetails={matchDetails} />
    </View>
  );
}
