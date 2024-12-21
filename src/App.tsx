import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { TryOut } from './pages/TryOut/TryOut';
import { SignUp } from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fcf2c2]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/try-out" element={<TryOut />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Other routes will be added here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;