import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


interface DeleteModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function DeleteModal ({visible, onClose,onConfirm}:DeleteModalProps) {
    return (
           <Modal
              visible={visible}
              transparent
              onRequestClose={onClose}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text
                    style={styles.title}
                  >
                    Limpar todos os itens?
                  </Text>
                  <Text style={styles.description}>
                    Deseja realmente limpar todos os itens?
                  </Text>
      
                  <View style={styles.btnContainer }>
                    <TouchableOpacity
                      style={styles.cancelBtn}
                      onPress={onClose}
                    >
                      <Text style={styles.cancelBtnText}>Cancelar</Text>
                    </TouchableOpacity>
      
                    <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
                      <Text style={styles.confirmBtnText}>Confirmar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
    )
}