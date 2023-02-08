import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../../hooks/useAuth";
import getMatchUserInfo from "../../../lib/getMatchUserInfo";

export default function ChatRow({ matchDetails }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);

  useEffect(() => {
    setMatchedUserInfo(getMatchUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  return (
    <TouchableOpacity className="flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg shadow">
      <Image
        className="rounded-full h-16 w-16 mr-4"
        source={{
          uri: matchedUserInfo?.photoURL,
        }}
      />
      <View>
        <Text className="text-lg font-semibold">
          {matchedUserInfo?.displayName}
        </Text>
        <Text>Say Hi</Text>
      </View>
    </TouchableOpacity>
  );
}
