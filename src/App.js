import './App.css';
import Navbar from './components/navbar';
import Banner from "./components/banner";
import Acasa from "./components/acasa";
import Pizza from "./components/pizza";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Acasa />
        <Pizza />
    </div>
  );
}

export default App;
