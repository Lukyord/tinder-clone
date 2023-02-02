import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import auth from "@react-native-firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

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

export default function Header({ user }) {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center relative px-5 z-50">
      <TouchableOpacity onPress={() => signOut()}>
        <Image
          className="h-10 w-10 rounded-full"
          source={{
            uri: user.photoURL,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
        <Image
          className="h-14 w-14"
          source={require("../../../assets/images/logo.webp")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Ionicons name="chatbubbles-sharp" size={36} color="#FF5864" />
      </TouchableOpacity>
    </View>
  );
}
