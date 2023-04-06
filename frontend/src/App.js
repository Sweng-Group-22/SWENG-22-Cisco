// import Popup from "./components/Popup";
// import LikeDislike from "./components/LikeDislike";
// import Footer from "./components/Footer"
import WordTranslations from './pages/WordTranslations';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/404';
// import LetterLine from './components/LetterLine';
// import AddButton from './components/AddButton';
import BrowseLetter from "./pages/BrowseLetter";
import Phrase from "./pages/Phrase";
import GetPhrases from "./pages/GetPhrases";
// import { useQuery } from "react-query";
function App() {

  // fetch('http://localhost:8080/helloworld').then(res => res.json()).then(data=>console.log(data))
	// Using the hook
	
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='word' element={<WordTranslations/>}></Route>
          <Route path='browse'>
            
            <Route path='*' element={<BrowseLetter/>}></Route>
          </Route>
          <Route path='*' element={<Page404/>}></Route>
          <Route path='404' element={<Page404/>}></Route>
          <Route path='phrase'>
            <Route path="*" element={<Phrase/>}/>
            <Route path="get" element={<GetPhrases/>}/>
          </Route>
        </Route>
      </Routes>

      
      {/* <LetterLine/> */}
      
    </>
  );
}

export default App;
