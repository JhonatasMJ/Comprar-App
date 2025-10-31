import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";
import { StatusIcon } from "@/components/StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
};

export function Item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onStatus} activeOpacity={0.8}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#CB413D" />
      </TouchableOpacity>
    </View>
  );
}


/* Esse componente é responsavél por renderizar os itens, passando os status, descrição e podendo remove-los */