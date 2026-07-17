import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { yachts } from "../data/clients";

export default function YachtDetail() {
  const { id } = useParams();
  const item = yachts.find(y => y.id === id);
  return <DetailPage item={item} backTo="/clients/yachting" backLabel="Yachting" type="yacht" />;
}
