import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { islandListings } from "../data/clients";

export default function IslandDetail() {
  const { id } = useParams();
  const item = islandListings.find(i => i.id === id);
  return <DetailPage item={item} backTo="/clients/islands" backLabel="Island Getaways" type="stay" />;
}
