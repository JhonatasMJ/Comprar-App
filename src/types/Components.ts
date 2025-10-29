import {TouchableOpacityProps, TextInputProps} from "react-native";

/* Pega props do botao e o '&' pega tudo que for passado a parte do botao  passo o ...rest para pegar o restante de props */
export type  ButtonProps = TouchableOpacityProps & { 
    title: string
}

