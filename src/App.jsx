// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Book from "./pages/Book";
// import Login from "./pages/Login";
// import Navbar from "./components/global/Navbar";
// import Footer from "./components/global/Footer";
// import Registration from "./pages/Registration";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/register" element={<Registration />}></Route>
//         <Route exact path="/book" element={<Book />} />
//         <Route exact path="/login" element={<Login />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Book from "./pages/Book";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

import AppWrapper from "./components/global/AppWrapper";
import Navbar from "./components/global/Navbar";
import SearchBar from "./components/global/SearchBar";
import Footer from "./components/global/Footer";

import "./App.css";
import "./assets/css/style.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loader from "./assets/images/loader.gif";

import MainNavigation from "./components/global/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <div className="loader-wrapper">
        <img src={loader} alt="loader" />
      </div>
      <AppWrapper>
        <Navbar />
        <SearchBar />
        <MainNavigation />
        <ToastContainer />
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
