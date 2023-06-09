import { styles } from "../assets/styles";
import { Text, View } from "./Themed";
import Rating from "./rating";

export default function Following(props: { data: any; flipped: boolean }) {
  const name = props.data.user?.name;

  return (
    <>
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <Text style={styles.question}>{props.data.flashcard_front}</Text>
        {props.flipped && (
          <>
            <View
              style={styles.separator}
              lightColor="rgba(255,255,255,0.1)"
              darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={{ color: "#38b9a0", fontWeight: "bold" }}>Answer</Text>
            <Text
              style={[
                styles.white,
                styles.question,
                { color: "#ccc", marginBottom: 25 },
              ]}
            >
              {props.data.flashcard_back}
            </Text>
            <Text style={[styles.white, { color: "#aaa" }]}>
              How well did you know this?
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                backgroundColor: "transparent",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Rating text="1" color="#e67e22" />
              <Rating text="2" color="#f5b041" />
              <Rating text="3" color="#f4d03f" />
              <Rating text="4" color="#0e6655" />
              <Rating text="5" color="#148f77" />
            </View>
          </>
        )}
      </View>
      <Text style={styles.white}>{name}</Text>
      <Text style={[styles.white, { fontSize: 12 }]}>
        {props.data.description}
      </Text>
    </>
  );
}
