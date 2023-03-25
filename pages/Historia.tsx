import React from "react";
import Quiz from "../components/Quiz";
import { NavigationProp } from "@react-navigation/native";
import Data from "./../data/HistoriaData";
import Background from "./../assets/images/history.jpg";

interface HistoriaProps {
  navigation: NavigationProp<any>;
}

const Historia = (props: HistoriaProps) => {
  return (
    <Quiz
      navigation={props.navigation}
      data={Data}
      background={Background}
      title="Historia"
      color="#C6A758"
      rgba="rgba( 134, 130, 121, 0.4)"
    />
  );
};

export default Historia;
