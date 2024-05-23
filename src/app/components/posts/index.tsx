import { View } from "react-native";
import { PostsProps } from "./posts";
import { Post } from "../post";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";

export function Posts({ posts }: PostsProps) {
  function postsByColumn(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1;

    return posts
      .filter((_, index) => {
        return index % 2 === rest;
      })
      .map((post) => <Post key={post.id} post={post} />);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn("left")}</View>
        <View style={styles.column}>{postsByColumn("right")}</View>
      </View>
    </ScrollView>
  );
}
