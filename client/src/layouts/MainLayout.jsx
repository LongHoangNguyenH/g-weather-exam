import Search from "@/components/search/Search";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-[100vh] max-w-[1200px] flex m-auto items-center">
      <div className="w-full m-auto shadow-lg rounded-[40px] bg-white">
        <div className="flex max-md:flex-row">
          <div className="flex-1">
            <div className="flex flex-col p-10 gap-2">
              <Outlet />
            </div>
          </div>
          <div className=" flex-[0.6]">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
