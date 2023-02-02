import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";

export default function Footer({ swipeRef }) {
  return (
    <View className="flex flex-row justify-evenly mb-5">
      <TouchableOpacity
        onPress={() => swipeRef.current.swipeLeft()}
        className="items-center justify-center w-16 h-16 bg-red-200 rounded-full"
      >
        <Entypo name="cross" size={24} color="red" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => swipeRef.current.swipeRight()}
        className="items-center justify-center w-16 h-16 bg-green-200 rounded-full"
      >
        <AntDesign name="heart" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );
}
