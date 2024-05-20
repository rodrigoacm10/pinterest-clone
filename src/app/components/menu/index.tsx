import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";
import { forwardRef } from "react";
import { View, Text } from "react-native";
import { MenuProps } from "./menu";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@//theme";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />
          <Text style={styles.title}>Menu</Text>
        </View>
      </View>
    </BottomSheet>
  );
});
