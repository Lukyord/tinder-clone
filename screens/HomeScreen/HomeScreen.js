import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

//eas build --profile development --platform android
//npx expo start --dev-client

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  } catch (error) {
    console.error(error);
  }
};

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="click" onPress={() => navigation.navigate("Chat")} />
      <Button title="sign out" onPress={() => signOut()} />
    </View>
  );
}
