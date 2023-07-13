import BuyModal from "./buyModal/BuyModal";
import ListModal from "./listModal/ListModal";

export default function Modals({ children }) {
  return (
    <ListModal>
        <BuyModal>
          {children}
        </BuyModal>
    </ListModal>
  );
}