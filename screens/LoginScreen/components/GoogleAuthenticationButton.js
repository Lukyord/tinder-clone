import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);

  user_sign_in
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function GoogleAuthenticationButton() {
  GoogleSignin.configure({
    webClientId:
      "587002959558-83thl4pvqluijlimj7quck3nem9b0842.apps.googleusercontent.com",
  });

  return (
    <TouchableOpacity
      style={{ marginHorizontal: "25%" }}
      className="absolute bottom-40 w-52 p-4 rounded-2xl bg-white"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log("Signed in with Google!"))
      }
    >
      <Text className="text-center font-semibold">Sign in & get Swiping</Text>
    </TouchableOpacity>
  );
}
