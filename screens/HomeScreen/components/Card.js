import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";
import { DUMMY_DATA } from "../dummy_data";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function Card({ swipeRef, profiles, swipeLeft, swipeRight }) {
  return (
    <>
      <View className="flex-1 -mt-10">
        <Swiper
          ref={swipeRef}
          containerStyle={{
            backgroundColor: "transparent",
          }}
          cards={profiles}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={(cardIndex) => swipeLeft(cardIndex)}
          onSwipedRight={(cardIndex) => swipeRight(cardIndex)}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) =>
            card ? (
              <View key={card.id} className="bg-white h-3/4 rounded-3xl">
                <Image
                  className="h-full w-full rounded-t-xl"
                  source={{
                    uri: card.photoURL,
                  }}
                />
                <View
                  className="bg-white w-full h-20 flex flex-row justify-between 
            items-between px-6 py-2 rounded-b-md shadow-2xl"
                >
                  <View>
                    <Text className="text-xl font-bold">
                      {/* {card.firstName} {card.lastName} */}
                      {card.displayName}
                    </Text>
                    <Text>{card.job}</Text>
                  </View>
                  <Text className="text-2xl font-bold">{card.age}</Text>
                </View>
              </View>
            ) : (
              <View className="relative bg-white h-3/4 rounded-xl justify-center items-center shadow-2xl">
                <Text className="font-bold pb-5">No more profiles</Text>
                <Image
                  className="h-20 w-20"
                  source={{
                    uri: "https://links.papareact.com/6gb",
                  }}
                />
              </View>
            )
          }
        />
      </View>
    </>
  );
}
