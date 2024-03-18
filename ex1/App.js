import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  state = {
    animation: new Animated.Value(150),
  };

  const startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      this.state.animation.setValue(150);
    });
  };

  const animatedStyles = {
    width: this.state.animation,
    height: this.state.animation,
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
