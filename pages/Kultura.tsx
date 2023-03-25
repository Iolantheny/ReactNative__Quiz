import React from "react";
import Quiz from "../components/Quiz";
import { NavigationProp } from "@react-navigation/native";
import Data from "./../data/KulturaData";
import Background from "./../assets/images/culture.jpg";

interface KulturaProps {
  navigation: NavigationProp<any>;
}

const Kultura = (props: KulturaProps) => {
  return (
    <Quiz
      navigation={props.navigation}
      data={Data}
      background={Background}
      title="Kultura"
      color="#6D9DE8"
      rgba="rgba( 142, 125, 170, 0.4)"
    />
  );
};

export default Kultura;
