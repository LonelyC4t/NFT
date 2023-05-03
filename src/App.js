import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useWindowWidth } from "./hook/windowWidth";
import { MainMobile } from "./components/Mobile/MainMobail";

function App() {
  const windowWidth = useWindowWidth();
  
  return (
    <>
      { 
        windowWidth < 1130 ? 
        <>
          <MainMobile />
        </> 
        :
        <>
          <header> <Header /> </header>
          <main> <Main /> </main>
        </> 
      }
      
    </>
      
  );
}

export default App;
