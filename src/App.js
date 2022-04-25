
import './App.css';
import Fixture from './components/fixture/Fixture';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home/>
       <Fixture/>
       
    </div>
  );
}

export default App;
