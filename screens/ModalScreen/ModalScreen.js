import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import {
  serverTimestamp,
  doc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function ModalScreen() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !job || !age;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Update your Profile",
      headerStyle: {
        backgroundColor: "#FF5864",
      },
      headerTitleStyle: { color: "white" },
    });
  });

  // setDoc(doc(db, "users", user.uid), {
  //   id: user.uid,
  //   displayName: user.displayName,
  //   photoURL: image,
  //   job: job,
  //   age: age,
  //   timestamp: serverTimestamp(),

  async function updateUserProfile() {
    try {
      // const docRef = await addDoc(collection(db, "users"), {
      //   id: user.uid,
      //   displayName: user.displayName,
      //   photoURL: image,
      //   job: job,
      //   age: age,
      //   timestamp: serverTimestamp(),
      // });

      const docRef = await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        displayName: user.displayName,
        photoURL: image,
        job: job,
        age: age,
        timestamp: serverTimestamp(),
      });

      // console.log("Document written with ID: ", docRef.id);
      console.log("Document written with ID: ", user.uid);
      navigation.navigate("Home");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <View className="relative flex-1 items-center pt-4">
      <Image
        className="h-20 w-full"
        resizeMode="contain"
        source={{
          uri: "https://links.papareact.com/2pf",
        }}
      />
      <Text className="text-xl text-gray-500 p-2 font-bold">
        Welcome {user.displayName}
      </Text>

      <Text className="text-center p-4 font-bold text-red-400">
        Step 1: The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        className="text-center text-xl pb-2"
        placeholder="Enter a Profile Pic URL"
      />

      <Text className="text-center p-4 font-bold text-red-400">
        Step 2: The Occupation
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => setJob(text)}
        className="text-center text-xl pb-2"
        placeholder="Enter your Occupation"
      />

      <Text className="text-center p-4 font-bold text-red-400">
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        className="text-center text-xl pb-2"
        placeholder="Enter your Age"
        keyboardType="numeric"
      />

      <TouchableOpacity
        disabled={incompleteForm}
        className={`w-64 p-3 rounded-xl mt-52 ${
          incompleteForm ? "bg-gray-400" : "bg-red-400"
        }`}
        onPress={updateUserProfile}
      >
        <Text className={`text-center text-white text-xl`}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
