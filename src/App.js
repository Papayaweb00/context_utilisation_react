import './App.css';
import ThemeContextProvider from './context/ThemeContextProvider';
import Detail from './details/Detail';
import ErreurPage from './erreurpage/ErreurPage';
import HeaderNavigation from './headernavigation/HeaderNavigation';
import HomePage from './postrecup/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">

        <HeaderNavigation />

        <div>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path="/article/:id" element={<Detail />} />
              <Route path="*" element={<ErreurPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
