import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
