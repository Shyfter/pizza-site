import './App.css';
import Navbar from './components/navbar';
import Banner from "./components/banner";
import Acasa from "./components/acasa";
import Phone from './components/phone';
import Footer from './components/footer';
import Copyright from './components/copyright';
import Meniu from './components/meniu';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Acasa />
      <Meniu />
      <Phone />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App;
