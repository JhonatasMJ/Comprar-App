import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "@/types/Components";

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
    style={styles.container} 
    activeOpacity={0.8}
    {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
