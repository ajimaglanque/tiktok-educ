import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  white: {
    color: "white",
  },
  timer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "black",
  },
  lineLeft: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
  },
  lineRight: {
    alignSelf: "flex-end",
    marginHorizontal: 12,
  },
  line: {
    marginTop: 3,
    alignSelf: "center",
    backgroundColor: "white",
    width: "25%",
    height: 3,
    borderRadius: 10,
  },
  activeTab: {
    color: "white",
  },
  header: {
    paddingTop: 30,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  headerTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  headerText: {
    color: "gray",
    paddingHorizontal: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  questionPort: {
    backgroundColor: "transparent",
    flexDirection: "column",
    flex: 4,
    padding: 10,
  },
  question: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 16,
    flexShrink: 1,
    justifyContent: "center",
  },
  choices: {
    marginVertical: 5,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexShrink: 1,
    borderRadius: 10,
  },
  footer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#111",
  },
  footerElement: {
    backgroundColor: "#111",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  sideIcons: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  flip: {
    backgroundColor: "#38b9a0",
    borderRadius: 50,
    paddingVertical: 7,
    paddingHorizontal: 9,
  },
  iconText: {
    fontSize: 12,
    color: "white",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  separator: {
    marginVertical: 30,
    height: 2,
    width: "100%",
  },
});
