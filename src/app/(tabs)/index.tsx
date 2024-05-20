import { theme } from "@//theme";
import { View, Text, StyleSheet } from "react-native";
import { Filters } from "../components/filters";
import { FILTERS } from "../components/utils/filters";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Home</Text> */}
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 52,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
