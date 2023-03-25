import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import Background from "./../assets/images/background.jpg";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

interface HomeProps {
  navigation: NavigationProp<any>;
}

SplashScreen.preventAutoHideAsync();

const Home = (props: HomeProps) => {
  const Categories = [
    "Geografia",
    "Historia",
    "Kultura",
    "Sport",
    "Technologia",
  ];

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Figtree: require("./../assets/fonts/Figtree-Regular.ttf"),
        });
        await new Promise((resolve: any) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.background}
      >
        <View>
          <Text style={styles.title}>QUIZ</Text>
          <Text style={styles.text}>
            10 PYTAŃ <Text style={{ fontSize: 30 }}>|</Text> 5 KATEGORII
          </Text>
          <Text style={styles.text}>WYBIERZ KATEORIĘ:</Text>
        </View>
        <View>
          {Categories.map((i: string) => {
            return (
              <LinearGradient
                colors={["#81367D", "#7A42F0"]}
                start={{ x: 0, y: 0.1 }}
                key={i}
                style={styles.linear}
              >
                <Pressable
                  style={styles.btn}
                  onPress={() => props.navigation.navigate(i)}
                >
                  <Text style={styles.btnText}>{i}</Text>
                </Pressable>
              </LinearGradient>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 70,
    marginBottom: 10,
    textAlign: "center",
    flexBasis: 100,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Figtree",
  },
  text: {
    fontSize: 18,
    margin: 10,
    flexBasis: 70,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    lineHeight: 60,
    fontFamily: "Figtree",
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 3,
    fontWeight: "bold",
  },
  linear: {
    borderRadius: 15,
    padding: 10,
    margin: 6,
    marginLeft: 40,
    marginRight: 40,
  },
});
