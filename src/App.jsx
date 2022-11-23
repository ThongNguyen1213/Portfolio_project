import {Introduction, MyProgress, Navbar, Preloader, Projects } from './components';
import Contact from './components/Contact';


// import Projects from './components/Projects';
 
const App = () => {


  return (
    <div className=" w-full bg-primary">
        <div>
          <Preloader />
          <Navbar />
          <Introduction />
          <MyProgress />
          <Projects />
          <Contact />
        </div>
    </div>
  );
}

export default App