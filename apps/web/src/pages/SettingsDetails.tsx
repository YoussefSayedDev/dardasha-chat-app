import { useParams } from "react-router-dom";
import SettingsDetailsPage from "./SettingsDetailsPage";

export default function SettingsDetails() {
  const { id: settingId } = useParams<{ id: string }>();
  return <SettingsDetailsPage id={settingId} />;
}
