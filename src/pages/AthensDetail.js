import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { athensListings } from "../data/clients";

export default function AthensDetail() {
  const { id } = useParams();
  const item = athensListings.find(a => a.id === id);
  return <DetailPage item={item} backTo="/clients/athens" backLabel="Athens Stays" type="stay" />;
}
