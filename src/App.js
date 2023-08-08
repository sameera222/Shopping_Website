import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Carousels from './containers/Carousels/Carousels';
import HomePage from './containers/Carousels/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Carousels/>
      <HomePage/>
    </div>
  );
}

export default App;
