import { StyleSheet, Text } from "react-native";

export default function GameOverScreen() {
  return <Text style={styles.title}>Game Over</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});