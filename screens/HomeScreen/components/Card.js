import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-deck-swiper";
import { DUMMY_DATA } from "../dummy_data";

export default function Card() {
  return (
    <View className="flex-1 -mt-6">
      <Swiper
        containerStyle={{
          backgroundColor: "transparent",
        }}
        cards={DUMMY_DATA}
        renderCard={(card) => (
          <View key={card.id} className="relative bg-white h-3/4 rounded-xl">
            <Image
              className="h-full w-full rounded-xl"
              source={{
                uri: card.photoURL,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
