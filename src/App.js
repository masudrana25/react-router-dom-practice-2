import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>

          <Route path='*' element={<NoMatch></NoMatch>}></Route>

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;