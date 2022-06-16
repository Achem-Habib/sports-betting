import { useState } from "react";
import Header from "../Navbar/Header";
import SideBar from "../Navbar/SideBar";
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav>
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </nav>
  );
}

export default Navbar;
