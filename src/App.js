import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
// import Detail from "./components/Detail";
import Routesss from "./Routesss";

// import { BrowserRouter as Router,Route ,Switch } from
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  exact path="/" element={<Routesss />} />
          <Route  exact path="/detail/:id/:api" element={<Detail />} />
            
          
          {/* <Route  exact path="/detail">
            <Detail />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
