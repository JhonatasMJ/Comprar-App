import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FCFCFC",
    paddingTop: 62,
    padding: 24,
    gap: 12
  },
    logo: {
    width: 134, /* Não usar pixel pois assim ele será responsivo */
    height: 34,
  },
});
