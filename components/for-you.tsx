import { useMemo, useState } from "react";
import { styles } from "../assets/styles";
import { Text, View } from "./Themed";
import { FontAwesome } from "@expo/vector-icons";

export default function ForYou(props: { data: any; flipped: boolean }) {
  const name = props.data.user.name;
  const [answer, setAnswer] = useState<any>();

  const getAnswer = async (id: number) => {
    try {
      let url = `https://cross-platform.rp.devfactory.com/reveal?id=${props.data.id}
`;
      const response = await fetch(url);
      const json = await response.json();
      setAnswer(json);
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(() => {
    getAnswer(props.data.id);
  }, [props.data.id, props.flipped]);

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
              <View
                style={
                  props.flipped && answer?.correct_options[0].id === x.id
                    ? [styles.correct]
                    : [styles.choices]
                }
                key={x.id}
              >
                <Text style={styles.white}>{x.answer}</Text>
                <FontAwesome
                  name="check-circle"
                  size={20}
                  style={
                    props.flipped && answer?.correct_options[0].id === x.id
                      ? [styles.white, { alignSelf: "center" }]
                      : { display: "none" }
                  }
                />
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
