import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { Loading } from "./src/components/Loading/Loading";
import { HomePage } from "./src/screens/homePage/HomePage";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

export default function App() {
  const [fontLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoader ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
