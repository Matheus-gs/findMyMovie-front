import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Router } from "./router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}
