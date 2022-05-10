
import './App.css';
import Fixture from './components/fixture/Fixture';
import Highlights from './components/highlights/Highlights';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home/>
       <Fixture/>
       <Highlights/>
    </div>
  );
}

export default App;
