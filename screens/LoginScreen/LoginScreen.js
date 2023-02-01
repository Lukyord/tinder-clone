import { View, Text, Button, ImageBackground } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
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

export default function LoginScreen() {
  GoogleSignin.configure({
    webClientId:
      "587002959558-83thl4pvqluijlimj7quck3nem9b0842.apps.googleusercontent.com",
  });

  return (
    <View>
      <GoogleSigninButton
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log("Signed in with Google!")
          )
        }
      />
      <ImageBackground></ImageBackground>
    </View>
  );
}
