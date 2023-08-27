import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="overflow-hidden bg-[#121212] h-screen w-screen">
      <Outlet />
    </div>
  );
}
