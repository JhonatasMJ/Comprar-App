import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { ItemStorage, itemsStorage } from "@/storage/itemsStorage";

/* Criar um array de status, caso futuramente eu quiser adicionar mais */
const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição do item.");
    }

    /* Criar um novo item e gera um id aleatório */
    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };
  }

  async function getItems() {
    try {
      const response = await itemsStorage.get();
      setItems(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível filtrar os itens.");
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
        />
        <Button onPress={handleAdd} title="Adicionar" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}

          <TouchableOpacity style={styles.clearBtn}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Status alterado")}
              onRemove={() => console.log("Removido")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item encontrado.</Text>
          )}
        />
      </View>
    </View>
  );
}
