import { styles } from "../assets/styles";
import { Text, View } from "./Themed";

export default function Button(props: { text: string; activeTab?: string }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <Text
        style={
          props.text === props.activeTab
            ? [styles.headerText, styles.activeTab]
            : styles.headerText
        }
      >
        {props.text}
      </Text>
    </View>
  );
}
