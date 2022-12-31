import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Search from "./components/Search";
// import Detail from "./components/Detail";
import Routesss from "./Routesss";

// import { BrowserRouter as Router,Route ,Switch } from
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route  exact path="/" element={<Routesss />} />
          <Route  exact path="/detail/:id/:api" element={<Detail />} />
          <Route  exact path="/search/:name" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
