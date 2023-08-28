import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Carousels from './containers/Carousels/Carousels';
import HomePage from './containers/Carousels/HomePage';
import Footer from './containers/Footer/Footer';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Navigation/>
      <Carousels/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
