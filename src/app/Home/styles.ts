import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e7e6e6ff",
    paddingTop: 62,
  },
    logo: {
    width: 134, /* Não usar pixel pois assim ele será responsivo */
    height: 34,
  },
    form: {
      width: "100%",  
      paddingHorizontal: 16,
      gap: 6,
      marginTop: 42
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: 24,
  }
});
