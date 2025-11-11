import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10
  },
  description: {
   marginBottom: 20
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },
  confirmBtn: {
    padding: 10,
    backgroundColor: "#e63946",
    borderRadius: 6,
    flex: 1,
    alignItems: "center",
  },
  confirmBtnText: {
    color: "#fff", 
    fontWeight: 700
  },
  cancelBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    flex: 1,
    alignItems: "center",
  },
  cancelBtnText: {
   fontWeight: 700,
   color: "#b2b2b2"
  }
});
