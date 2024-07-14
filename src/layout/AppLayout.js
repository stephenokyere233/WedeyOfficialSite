import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
const AppLayout = () => {
  const pathName = useLocation();

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathName]
  );

  return (
    <div className="">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
