import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav"
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
     
          <Route path="/" element={ 
          
          <>
          
          <Home/>
          <Projects/>
          <About/>
          <Contact/>
          </>
      
          }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
