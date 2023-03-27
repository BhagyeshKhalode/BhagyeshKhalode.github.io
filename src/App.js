import './App.css';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      {/* <Calender/> */}
      {/* <Stats/> */}
      <Skills/>
      <Contacts/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
