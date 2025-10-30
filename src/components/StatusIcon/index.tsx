import { FilterStatus } from "@/types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native";

/* Se status for done, mostra um icone se nao mostra outro tipo de icone*/
export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2c46b1" />
  ) : (
    <CircleDashed size={18} color="#000" />
  );
}
