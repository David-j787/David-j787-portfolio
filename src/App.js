import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About';
import AboutSocial from './components/About/about_social.js';
import Proyects from './components/Proyects/Proyects.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <AboutSocial></AboutSocial>
      <Proyects></Proyects>
      <Footer></Footer>
    </div>
  );
}

export default App;
