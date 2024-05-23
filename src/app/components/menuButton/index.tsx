import { Pressable, Text } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@//theme";
import { styles } from "./style";
import { MenuButtonProps } from "./menuButton";

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        style={styles.icon}
        color={theme.colors.white}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
// container: {
//   alignItems: "center",
// },
// text: {},
// icon: {},
