// Initialisation terminees 
// Importation
import './App.css';
import Header from './Header';
import ThemeChanger from './ThemeChanger';
import ThemeContextProvider from './ThemeContext';
import AfficheTheme from './AfficheTheme';

function App() {
  return (
    <ThemeContextProvider>
      <Header />

      <ThemeChanger />
      <AfficheTheme />

    </ThemeContextProvider>
  );
}

export default App;
