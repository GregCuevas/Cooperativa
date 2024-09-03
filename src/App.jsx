import React from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      // Aqui se rederizara todo
      <Outlet />
    </>
  );
};

export default App;
