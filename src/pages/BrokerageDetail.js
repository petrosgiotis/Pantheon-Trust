import { useParams } from "react-router-dom";
import { useAdminData } from "../context/AdminDataContext";
import DetailPage from "./DetailPage";

export default function BrokerageDetail() {
  const { id } = useParams();
  const { listings } = useAdminData();
  const item = listings.find(p => p.id === id);
  return <DetailPage item={item} backTo="/partners/brokerage" backLabel="Brokerage" />;
}
