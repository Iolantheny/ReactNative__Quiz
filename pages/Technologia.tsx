import React from "react";
import Quiz from "../components/Quiz";
import { NavigationProp } from "@react-navigation/native";
import Data from "./../data/TechnologiaData";
import Background from "./../assets/images/technology.jpg";

interface TechnologiaProps {
  navigation: NavigationProp<any>;
}

const Technologia = (props: TechnologiaProps) => {
  return (
    <Quiz
      navigation={props.navigation}
      data={Data}
      background={Background}
      title="Technologia"
      color="#57BCAB"
      rgba="rgba( 33, 54, 51, 0.7 )"
    />
  );
};

export default Technologia;
