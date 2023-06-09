import { Text, View } from "../../components/Themed";
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../assets/styles";
import Following from "../../components/following";
import ForYou from "../../components/for-you";
import Button from "../../components/button";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native";

export default function TabOneScreen() {
  const [activeTab, setActiveTab] = useState("Following");
  const [data, setData]: any = useState({});
  const [flipped, setFlipped] = useState(false);
  const [swipeStart, setSwipeStart] = useState<any>();
  const [timer, setTimer] = useState<number>(0);
  const MINUTE_MS = 60000;

  const getData = async (tab: string) => {
    try {
      let url =
        tab === "Following"
          ? "https://cross-platform.rp.devfactory.com/following"
          : "https://cross-platform.rp.devfactory.com/for_you";
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timer}>
          <FontAwesome5 name="stopwatch" color="gray" size={20} />
          <Text style={{ color: "gray", alignSelf: "center" }}> {timer}m</Text>
        </View>
        <View style={{ backgroundColor: "transparent" }}>
          <View style={styles.headerTabs}>
            <TouchableHighlight
              onPress={() => {
                setActiveTab("Following");
                setFlipped(false);
              }}
            >
              <Button text="Following" activeTab={activeTab} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setActiveTab("For You");
              }}
            >
              <Button text="For You" activeTab={activeTab} />
            </TouchableHighlight>
          </View>
          <View
            style={
              activeTab === "Following"
                ? [styles.line, styles.lineLeft]
                : [styles.line, styles.lineRight]
            }
          />
        </View>
        <FontAwesome name="search" color="white" size={20} />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexGrow: 1,
        }}
      >
        <LinearGradient
          colors={["#002025", "#003035"]}
          style={styles.background}
        >
          <View
            style={styles.questionPort}
            onTouchStart={(e) => setSwipeStart(e.nativeEvent.pageY)}
            onTouchEnd={(e) => {
              if (swipeStart - e.nativeEvent.pageY > 20) {
                getData(activeTab);
                setFlipped(false);
              }
            }}
          >
            {activeTab === "Following" && (
              <Following data={data} flipped={flipped} />
            )}
            {activeTab === "For You" && <ForYou data={data} />}
          </View>
          <View style={styles.sideIcons}>
            <FontAwesome
              name="user-circle"
              color="#eb9843"
              size={35}
              style={styles.profilePic}
            />
            <FontAwesome name="heart" color="white" size={35} />
            <Text style={styles.iconText}>87</Text>
            <FontAwesome name="commenting" color="white" size={35} />
            <Text style={styles.iconText}>2</Text>
            <FontAwesome name="share" color="white" size={35} />
            <Text style={styles.iconText}>17</Text>
            <FontAwesome name="bookmark" color="white" size={35} />
            <Text style={styles.iconText}>203</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                setFlipped(!flipped);
              }}
            >
              <View style={styles.flip}>
                <FontAwesome name="refresh" color="white" size={25} />
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.iconText}>Flip</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerElement}>
          <MaterialIcons name="video-collection" color="white" />
          <Text style={{ color: "white", paddingHorizontal: 5 }}>
            Playlist · Unit 5: {data.playlist}
          </Text>
        </View>
        <View style={styles.footerElement}>
          <Entypo name="chevron-right" color="white" size={15} />
        </View>
      </View>
    </View>
  );
}
