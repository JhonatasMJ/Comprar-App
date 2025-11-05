import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export function Input({...rest}: TextInputProps ) { 
    return (
        <TextInput placeholderTextColor={"#828282"} style={styles.container} {...rest}/>
    )
}