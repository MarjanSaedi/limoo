import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./Components/MainPage.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
