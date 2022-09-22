import { Link } from "react-router-dom";

function SideMenuItem({ children, to, setShowSidebar }) {
  return (
    <Link
      to={to}
      onClick={() => setShowSidebar(false)}
      className="border-b border-slate-600 py-4 px-4 hover:bg-blue-800"
    >
      <div className="block p-2 -m-2 font-medium text-slate-100">
        {children}
      </div>
    </Link>
  );
}

export default SideMenuItem;
