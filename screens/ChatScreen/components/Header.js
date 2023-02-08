import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Foundation } from "@expo/vector-icons";

export default function Header({ title, callEnabled }) {
  const navigation = useNavigation();

  return (
    <View className="p-2 pt-10 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold pl-2">{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity className="rounded-full mr-4 p-3 w-15 h-15 bg-red-200">
          <Foundation name="telephone" size={20} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}
