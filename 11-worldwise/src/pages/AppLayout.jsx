import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
