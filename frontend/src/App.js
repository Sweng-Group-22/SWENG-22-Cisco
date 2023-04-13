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
import { useState } from 'react';
//import { useQuery, useMutation } from "react-query";
//import { getTranslations } from './api/Translation';
function App() {

  
	// Using the hook
  // const translations = useQuery(['translations'], getTranslations)
	// console.log(translations.data)
  const [phrase, setPhrase]=useState({})
  const index = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='word' element={<WordTranslations/>}></Route>
          <Route path='browse'>
            {index.map(letter=>{
              return <Route path={letter} element={<BrowseLetter Letter={letter} setPhrase={setPhrase}/>}></Route>
            })}
          </Route>
          <Route path='*' element={<Page404/>}></Route>
          <Route path='404' element={<Page404/>}></Route>
          <Route path='phrase'>
            <Route path="*" element={<Phrase phrase={phrase}/>}/>
            <Route path="get" element={<GetPhrases/>}/>
          </Route>
        </Route>
      </Routes>

      
      {/* <LetterLine/> */}
      
    </>
  );
}

export default App;
