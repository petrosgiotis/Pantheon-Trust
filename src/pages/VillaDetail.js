import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { villas } from "../data/clients";

export default function VillaDetail() {
  const { id } = useParams();
  const item = villas.find(v => v.id === id);
  return <DetailPage item={item} backTo="/clients/villas" backLabel="Villas" type="stay" />;
}
