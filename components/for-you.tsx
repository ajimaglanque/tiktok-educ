import { styles } from "../assets/styles";
import { Text, View } from "./Themed";

export default function ForYou(props: { data: any }) {
  const name = props.data.user.name;
  return (
    <>
      <View
        style={{
          flexGrow: 1,
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
          }}
        >
          <Text style={styles.question}>{props.data.question}</Text>
        </View>
        <View style={{ backgroundColor: "transparent", marginBottom: 10 }}>
          {props.data.options?.map((x: any) => {
            return (
              <View style={styles.choices} key={x.id}>
                <Text style={styles.white}>{x.answer}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={{ backgroundColor: "transparent", margin: 5 }}>
        <Text style={styles.white}>{name}</Text>
        <Text style={[styles.white, { fontSize: 12 }]}>
          Topic {props.data.description}
        </Text>
      </View>
    </>
  );
}
