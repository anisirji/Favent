import { blue } from "ansi-colors";
import { StyleSheet } from "react-native";

const globalstyles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000000",
  },
  title: {
    marginTop: 16,
    padding: 12,
    color: blue,
    fontSize: 20,
  },
});

export default globalstyles;

//Dosen't seem working
