
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
