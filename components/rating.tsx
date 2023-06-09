import { styles } from "../assets/styles";
import { Text } from "./Themed";

export default function Rating(props: { text: string; color: string }) {
  return (
    <Text
      style={[
        styles.white,
        {
          borderRadius: 10,
          backgroundColor: props.color,
          paddingVertical: 15,
          paddingHorizontal: 21,
          fontWeight: "bold",
          overflow: "hidden",
        },
      ]}
    >
      {props.text}
    </Text>
  );
}
