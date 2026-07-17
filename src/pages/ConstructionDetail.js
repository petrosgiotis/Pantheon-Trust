import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { constructionProjects } from "../data/constructions";

export default function ConstructionDetail() {
  const { id } = useParams();
  const item = constructionProjects.find(p => p.id === id);
  return <DetailPage item={item} backTo="/partners/constructions" backLabel="Constructions" />;
}
