import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { ItemStorage, itemsStorage } from "@/storage/itemsStorage";
import Toast from "react-native-toast-message";
import { DeleteModal } from "@/components/DeleteModal";

/* Criar um array de status, caso futuramente eu quiser adicionar mais */
const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  async function handleAdd() {
    if (!description.trim()) {
      return Toast.show({
        type: "error",
        text1: "Adicionar",
        text2: "Informe a descrição do item.",
      });
    }

    /* Criar um novo item e gera um id aleatório */
    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    await itemsByStatus();
    setFilter(FilterStatus.PENDING);

    Toast.show({
      type: "success",
      text1: "Adicionar",
      text2: `Item "${description}" adicionado com sucesso!`,
    });

    setDescription("");
  }

  /* Busca os itens filtrados pelo status */
  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível filtrar os itens.");
    }
  }

  /* Abre o modal */
  function handleModal() {
    setModalVisible(true);
  }

  /* Remove o item */
  async function handleRemove(id: string) {
    try {
      await itemsStorage.remove(id);
      await itemsByStatus();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover", "Não foi possível remover o item.");
    }
  }

  /* Limpa os itens */
  async function handleClear() {
    try {
      await itemsStorage.clear();
      setItems([]);
    } catch (error) {
      console.log(error);
      Alert.alert("Limpar", "Não foi possível limpar os itens.");
    } finally {
      setModalVisible(false);
    }
  }

  /* Atualiza o status do item */
  async function handleStatus(id: string) {
    try {
      await itemsStorage.toggleStatus(id);
      await itemsByStatus();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível atualizar o status.");
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);

  return (
    <View style={styles.container}>
      <DeleteModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleClear}
      />
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
          value={description}
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

          <TouchableOpacity onPress={handleModal} style={styles.clearBtn}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => handleStatus(item.id)}
              onRemove={() => handleRemove(item.id)}
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
      <Toast />
    </View>
  );
}
