import styles from "./style"
import { Navbar, Introduction, MyProgress, Skills, Projects } from './components';
 
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div> 
      
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Introduction />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
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
  </div>
  
  
);

export default App