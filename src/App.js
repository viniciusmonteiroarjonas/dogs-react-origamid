import './App.css';
import Header from './templates/site/Header';
import Footer from './templates/site/Footer';
import Home from './pages/Home';
import Login from './pages/components/auth/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './Contexts/UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
