import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContent, styles.pressed]
            : styles.buttonContent
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        accessibilityRole="button"
        accessibilityLabel={children}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonContent: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary600,
  },
});
