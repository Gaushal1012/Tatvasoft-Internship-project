import { RoutePaths } from "../../utils/enum";

import Login from "../../pages/Login";
import Registation from "../../pages/Registration";
import Book from "../../pages/Book";
import Home from "../../pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

const MainNavigation = () => {
  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
    <Routes>
      <Route exact path={RoutePaths.Home} element={<Home />} />
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Registation} element={<Registation />} />
      <Route exact path={RoutePaths.Book} element={<Book />} />
    </Routes>
  );
};

export default MainNavigation;
