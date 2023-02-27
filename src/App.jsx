import "./App.css";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="section1">
        <a href="#section2">Scroll</a>
      </div>
      <div id="section2"></div>
      <div id="section3"></div>
      <div id="section4"></div>
      <div id="section5"></div>
      <div id="section6"></div>
    </div>
  );
}

export default App;
