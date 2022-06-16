function SideMenuItem({ children, to }) {
  return (
    <a
      href={to}
      className="border-b border-slate-300 py-4 px-4 hover:bg-blue-800"
    >
      <div href="#" className="block p-2 -m-2 font-medium text-slate-100">
        {children}
      </div>
    </a>
  );
}

export default SideMenuItem;
