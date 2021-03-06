import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Intro from './components/Intro/intro';
import About from './components/About/About';
import AboutSocial from './components/About/about_social.js';
import Proyects from './components/Proyects/Proyects.js';
import Gracias from './components/Gracias/gracias';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <AboutSocial></AboutSocial>
      <Proyects></Proyects>
      <Gracias></Gracias>
      <Footer></Footer>
    </div>
  );
}

export default App;
