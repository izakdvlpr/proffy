import React from "react";
import { View, StatusBar, Text, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

import backIcon from "../../assets/images/icons/back.png";

import styles from "./styles";

interface OnboardingProps {
  path: string;
  active: boolean;
}

const OnboardingTab: React.FC<OnboardingProps> = ({ path, active }) => {
  const { navigate } = useNavigation();

  function handleNavigateToLandingPage() {
    navigate(path);
  }

  return (
    <View style={styles.tabWrapper}>
      <View style={styles.tabCircles}>
        {active ? (
          <>
            <View style={styles.tabCircle} />
            <View style={styles.tabCircleActived} />
          </>
        ) : (
          <>
            <View style={styles.tabCircleActived} />
            <View style={styles.tabCircle} />
          </>
        )}
      </View>
      <BorderlessButton onPress={handleNavigateToLandingPage}>
        <Image source={backIcon} resizeMode="contain" style={styles.tabIcon} />
      </BorderlessButton>
    </View>
  );
};

function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper index={0} showsPagination={false}>
        <View style={styles.slide}>
          <View style={[styles.topSide, { backgroundColor: "#8257E5" }]}>
            <Feather name="book-open" size={80} color="#FFF" />
          </View>

          <View style={styles.botSide}>
            <Text style={styles.botSideTitle}>01.</Text>
            <Text style={styles.botSideDescription}>
              Encontre vários professores para ensinar você
            </Text>
          </View>

          <OnboardingTab path="Landing" active={true} />
        </View>

        <View style={styles.slide}>
          <View style={[styles.topSide, { backgroundColor: "#04D361" }]}>
            <Ionicons name="ios-easel" size={80} color="#FFF" />
          </View>

          <View style={styles.botSide}>
            <Text style={styles.botSideTitle}>02.</Text>
            <Text style={styles.botSideDescription}>
              Ou dê aulas sobre o que você mais conhece
            </Text>
          </View>

          <OnboardingTab path="Landing" active={false} />
        </View>
      </Swiper>
    </View>
  );
}

export default Onboarding;
