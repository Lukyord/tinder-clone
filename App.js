import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import React from "react";
import "expo-dev-client";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
