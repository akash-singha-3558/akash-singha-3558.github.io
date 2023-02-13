import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Github } from "./components/Github";


import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App" >
      
    <Navbar/>
<Home/>
    <About/>
    <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
