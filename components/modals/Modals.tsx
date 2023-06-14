import ListModal from "./listModal/ListModal";

export default function Modals({ children }) {
  return (
    <ListModal>
        {children}
    </ListModal>
  );
}