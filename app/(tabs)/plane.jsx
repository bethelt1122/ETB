import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ExternalLink } from "@/components/ExternalLink";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

export default function TabThreeScreen() {
  const data = [
    { id: 1, image: "../../assets/images/c47.jpg", username: "C-47" },
    {
      id: 2,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      username: "Boeing720",
    },
    {
      id: 3,
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      username: "Boeing727",
    },
    {
      id: 5,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Boeing737",
    },
    {
      id: 6,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "boeing757",
    },
    {
      id: 7,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Boeing767",
    },
    {
      id: 8,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      username: "<Boeing77",
    },
    {
      id: 9,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "Boeing787",
    },
  ];

  const [users, setUsers] = useState(data);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.body}>
            <Collapse style={{ marginBottom: 10 }}>
              <CollapseHeader>
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#68a6b3",
                  }}
                >
                  <Text style={{ fontSize: 40, padding: 10, color: "#333333" }}>
                    C47
                  </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  style={{
                    flexDirection: "row", // Aligns children horizontally
                    alignItems: "center", // Centers children vertically
                    padding: 10,
                    color: "#333333",
                  }}
                >
                  <Image
                    source={require("@/assets/images/c47.jpg")}
                    style={{ width: 150, height: 105.8 }}
                  />
                  <Text style={styles.text}>
                    C-47 the first aircraft that Ethiopian airlines has operated
                    which could carry 28 passengers, 18-22 fully equipped
                    paratroopers, about 6,000 lbs. of cargo or 18 stretchers and
                    three medical personnel.
                  </Text>
                </View>
              </CollapseBody>
            </Collapse>
            <Collapse style={{ marginBottom: 10 }}>
              <CollapseHeader>
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#68a6b3",
                  }}
                >
                  <Text style={{ fontSize: 40, padding: 10, color: "#333333" }}>
                    720
                  </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  style={{
                    flexDirection: "row", // Aligns children horizontally
                    alignItems: "center", // Centers children vertically
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("@/assets/images/720.jpg")}
                    style={{ width: 150, height: 105.8 }}
                  />
                  <Text style={styles.text}>
                    The Boeing 720 is a four-engined low-wing cantilever
                    monoplane. it had a lighter structure through use of lighter
                    forged metal parts and thinner fuselage skins and
                    structures.
                  </Text>
                </View>
              </CollapseBody>
            </Collapse>
            <Collapse style={{ marginBottom: 10 }}>
              <CollapseHeader>
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#68a6b3",
                  }}
                >
                  <Text style={{ fontSize: 40, padding: 10 }}>727</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  style={{
                    flexDirection: "row", // Aligns children horizontally
                    alignItems: "center", // Centers children vertically
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("@/assets/images/c47.jpg")}
                    style={{ width: 150, height: 105.8 }}
                  />
                  <Text style={styles.text}>
                    This is some text next to the image!This is some text next
                    to the image! This is some text next to the image! This is
                    some text next to the image!
                  </Text>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    backgroundColor: "#C2E0E8",
  },
  image: {
    width: 60,
    height: 60,
  },
  body: {
    backgroundColor: "#0000",
  },
  box: {
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  iconContent: {
    width: 60,
    height: 60,
    backgroundColor: "#40E0D0",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    paddingLeft: 10,
    fontSize: 24,
    color: "white",
    flexShrink: 1,
    color: "#333333",
    fontFamily: "Cochin",
  },
});
