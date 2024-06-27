import './App.css';
import Navbar from './components/navbar';
import Banner from "./components/banner";
import Acasa from "./components/acasa";
import Pizza from "./components/pizza";
import Phone from './components/phone';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Acasa />
        <Pizza />
        <Phone />
    </div>
  );
}

export default App;
