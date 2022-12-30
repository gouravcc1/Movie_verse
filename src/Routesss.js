import './App.css';
import Header from './components/Header';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
function Routesss() {
    return (
      
      <div className="App">
        <Header />
        <Popular/>
        <Upcoming />
        <TopRated />
      </div>
    );
  }
  export default Routesss;
  