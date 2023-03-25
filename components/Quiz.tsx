import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ImageSourcePropType,
} from "react-native";

interface QuizProps {
  navigation: NavigationProp<any>;
  data: any;
  background: ImageSourcePropType;
  title: string;
  color: string;
  rgba: string;
}

const Quiz = (props: QuizProps) => {
  const [game, setGame] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<string>>([]);
  const [canAnswer, setCanAnswer] = useState<boolean>(true);
  const [playerAnswer, setPlayerAnswer] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0);

  const StartQuiz = () => {
    setGame(true);
    setAnswers(props.data[number].answers);
    setPlayerAnswer([]);
    setScore(0);
  };

  const CheckAnswer = (a: string) => {
    if (game) {
      setCanAnswer(false);
      const correct = props.data[number].correctAnswer === a;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      setPlayerAnswer((prev) => [...prev, a]);
      setTimeout(() => {
        const NextQuestion = number + 1;
        setCanAnswer(true);
        if (NextQuestion === props.data.length) {
          setGame(false);
        } else {
          setNumber(NextQuestion);
          setAnswers(props.data[number + 1].answers);
        }
      }, 1000);
    }
  };

  const Restart = () => {
    setGame(false);
    setScore(0);
    setPlayerAnswer([]);
    setNumber(0);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.background}
        resizeMode="cover"
        style={styles.background}
      >
        <Pressable
          style={styles.back}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={styles.backX}>x</Text>
        </Pressable>
        {!game && playerAnswer.length !== props.data.length ? (
          <View>
            <View>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Pressable
                style={[styles.btn, { backgroundColor: props.color }]}
                onPress={StartQuiz}
              >
                <Text style={styles.btnText}>START ▷</Text>
              </Pressable>
            </View>
          </View>
        ) : null}
        {game && props.data[number] && (
          <View>
            <View>
              <Text style={styles.quizName}>{props.title}</Text>
              <Text style={styles.questionNumber}>
                {number + 1} / {props.data.length}
              </Text>
              <Text style={styles.question}>{props.data[number].question}</Text>
            </View>
            <View>
              {answers.map((a: string, id: number) => {
                return (
                  <View style={{ alignItems: "center" }} key={id}>
                    <Pressable
                      style={[
                        styles.btn,
                        { backgroundColor: props.color, width: "80%" },
                      ]}
                      onPress={() => CheckAnswer(a)}
                      disabled={!canAnswer}
                    >
                      <Text style={[styles.btnText, { fontSize: 20 }]}>
                        {a}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {!game && playerAnswer.length === props.data.length ? (
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={{ backgroundColor: props.rgba }}>
              <Text style={styles.scoreName}>TWÓJ WYNIK:</Text>
              <Text style={styles.score}>
                {score} / {props.data.length}
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Pressable
                style={[styles.btn, { backgroundColor: props.color }]}
                onPress={Restart}
              >
                <Text style={styles.btnText}>Restart ⟳</Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    marginBottom: 30,
    textAlign: "center",
    flexBasis: 100,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Figtree",
  },
  backX: {
    fontSize: 50,
    color: "white",
  },
  back: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  btn: {
    borderColor: "white",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 15,
    padding: 10,
    width: "60%",
    margin: 10,
  },
  btnText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionNumber: {
    textAlign: "right",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 40,
    marginBottom: 15,
  },
  question: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    padding: 8,
  },
  quizName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 20,
  },
  scoreName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  score: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
