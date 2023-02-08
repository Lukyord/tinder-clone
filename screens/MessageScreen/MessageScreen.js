import { View, Text } from "react-native";
import React from "react";
import Header from "../ChatScreen/components/Header";
import getMatchUserInfo from "../../lib/getMatchUserInfo";
import useAuth from "../../hooks/useAuth";
import { useRoute } from "@react-navigation/native";

export default function MessageScreen() {
  const { user } = useAuth();
  const { params } = useRoute();

  const { matchDetails } = params;

  return (
    <View>
      <Header
        title={getMatchUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled
      />
    </View>
  );
}
