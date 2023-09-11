import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './container/Home';
import LoginForm from './features/LoginForm';
import ListCart from './container/ListCart';
import DetailProduct from './features/DetailProduct';

function App() {
  return (
    <div className="App font-mono h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<LoginForm />} />
          <Route path={`detail-product`} element={<DetailProduct />} />
          <Route path='Cart' element={<ListCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
