import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Geografia from "./pages/Geografia";
import Historia from "./pages/Historia";
import Kultura from "./pages/Kultura";
import Sport from "./pages/Sport";
import Technologia from "./pages/Technologia";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Geografia" component={Geografia} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="Kultura" component={Kultura} />
        <Stack.Screen name="Sport" component={Sport} />
        <Stack.Screen name="Technologia" component={Technologia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
