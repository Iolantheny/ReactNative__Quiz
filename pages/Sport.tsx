import React from "react";
import Quiz from "../components/Quiz";
import { NavigationProp } from "@react-navigation/native";
import Data from "./../data/SportData";
import Background from "./../assets/images/sport.jpg";

interface SportProps {
  navigation: NavigationProp<any>;
}

const Sport = (props: SportProps) => {
  return (
    <Quiz
      navigation={props.navigation}
      data={Data}
      background={Background}
      title="Sport"
      color="#6B242A"
      rgba="rgba( 136, 115, 114, 0.4 )"
    />
  );
};

export default Sport;
