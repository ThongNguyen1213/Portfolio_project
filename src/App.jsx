import {Introduction, MyProgress, Navbar, Projects } from './components';
import Contact from './components/Contact';

// import Projects from './components/Projects';
 
const App = () => {

  return (
    <div className=" w-full bg-primary">
      <div>
        <Navbar />
        <Introduction />
        <MyProgress />
        <Projects />
        <Contact />
      </div>
    

      {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <MyProgress />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex justify-end`}>
          <Skills />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex justify-end`}>
          <Contact />
        </div>
      </div> */}
    </div>
  
  
  );
}

export default App