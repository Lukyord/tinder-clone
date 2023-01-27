import { View, Text } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";

export default function LoginScreen() {
  const { user } = useAuth();

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
}
