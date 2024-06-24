import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Testimonials from "./pages/Testimonials";
import HubungiKami from "./pages/HubungiKami";
import Login from './pages/Login';
import UserList from './components/UserList'; 
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;