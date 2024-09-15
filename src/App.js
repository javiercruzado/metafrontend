import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
