import './App.css';
import Annoucements from './components/Annoucements';
import Branches from './components/Branches';
import Exchange from './components/Exchange';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Slider from './components/Slider';
import WelocmeSelection from './components/WelocmeSelection';


function App() {
  return (
    <div className="App">
    < Header />
    < Hero />
    <Slider />
    <WelocmeSelection />
    <Services />
    <Branches />
    <Annoucements />
    <Exchange />
    <Footer />
    </div>
  );
}

export default App;
