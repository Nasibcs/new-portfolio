import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
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
     
          <Route path="/" element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
