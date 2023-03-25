import { NavigationProp } from "@react-navigation/native";
import React from "react";
import Quiz from "./../components/Quiz";
import Background from "./../assets/images/geography.jpg";
import Data from "./../data/GeografiaData";

interface GeografiaProps {
  navigation: NavigationProp<any>;
}

const Geografia = (props: GeografiaProps) => {
  return (
    <Quiz
      navigation={props.navigation}
      data={Data}
      background={Background}
      title="Geografia"
      color="#436CB1"
      rgba="rgba( 21, 56, 117, 0.4)"
    />
  );
};

export default Geografia;
