import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-deck-swiper";
import { DUMMY_DATA } from "../dummy_data";

export default function Card({ swipeRef }) {
  return (
    <>
      <View className="flex-1 -mt-10">
        <Swiper
          ref={swipeRef}
          containerStyle={{
            backgroundColor: "transparent",
          }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => console.log("Swipe Pass")}
          onSwipedRight={() => console.log("Swipe Match")}
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
          renderCard={(card) => (
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
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text className="text-2xl font-bold">{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
