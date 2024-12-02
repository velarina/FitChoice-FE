import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();

      // Simulate fetching data
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Hide the splash screen
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return (
    <Image
      source={require("../assets/FitChoiceLogo.png")}
      style={styles.logo}
    ></Image>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
