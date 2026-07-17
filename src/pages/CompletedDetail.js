import { useParams } from "react-router-dom";
import { useAdminData } from "../context/AdminDataContext";
import DetailPage from "./DetailPage";

export default function CompletedDetail() {
  const { id } = useParams();
  const { completedProjects } = useAdminData();
  const item = completedProjects.find(p => p.id === id);
  return <DetailPage item={item} backTo="/partners/completed" backLabel="Completed Projects" />;
}
