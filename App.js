import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import SingUp from "./src/screens/SingUp";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <SingUp />
    </NativeBaseProvider>
  );
}
