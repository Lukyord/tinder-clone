import { StatusBar } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

//eas build --profile development --platform android
//npx expo start --dev-client

export default function HomeScreen() {
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();
  const swipeRef = useRef(null);
  const navigation = useNavigation();

  useLayoutEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (!snapshot.exists()) {
          navigation.navigate("Modal");
        }
      }),

    []
  );

  useEffect(() => {
    let unsub;

    const fetchCards = async () => {
      const passes = await getDocs(
        collection(db, "users", user.uid, "passes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      const swipes = await getDocs(
        collection(db, "users", user.uid, "swipes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      const passedUserIds = passes.length > 0 ? passes : ["test"];
      const swipedUserIds = swipes.length > 0 ? swipes : ["test"];

      unsub = onSnapshot(
        query(
          collection(db, "users"),
          where("id", "not-in", [...passedUserIds, ...swipedUserIds])
        ),
        (snapshot) => {
          setProfiles(
            snapshot.docs
              .filter((doc) => doc.id !== user.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          );
        }
      );
    };

    fetchCards();
    return unsub;
  }, [db]);

  const swipeLeft = (cardIndex) => {
    if (!profiles[cardIndex]) return;

    const userSwiped = profiles[cardIndex];
    console.log(`You swiped PASS on ${userSwiped.displayName}`);

    setDoc(doc(db, "users", user.uid, "passes", userSwiped.id), userSwiped);
  };

  const swipeRight = (cardIndex) => {
    if (!profiles[cardIndex]) return;

    const userSwiped = profiles[cardIndex];

    console.log(
      `You swiped MATCH on ${userSwiped.displayName} ${userSwiped.job}`
    );

    setDoc(doc(db, "users", user.uid, "swipes", userSwiped.id), userSwiped);
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={"transparent"} translucent />
      <Header user={user} />
      <Card
        swipeRef={swipeRef}
        profiles={profiles}
        swipeLeft={swipeLeft}
        swipeRight={swipeRight}
      />
      <Footer swipeRef={swipeRef} />
    </SafeAreaView>
  );
}
