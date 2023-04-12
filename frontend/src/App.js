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
import { useQuery } from "react-query";
import { getTranslations } from './api/Translation';
function App() {

  
	// Using the hook
  // const translations = useQuery(['translations'], getTranslations)
	// console.log(translations.data)
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='word' element={<WordTranslations/>}></Route>
          <Route path='browse'>
            <Route path='A' element={<BrowseLetter Letter={'A'}/>}></Route>
            <Route path='B' element={<BrowseLetter Letter={'B'}/>}></Route>
            <Route path='C' element={<BrowseLetter Letter={'C'}/>}></Route>
            <Route path='D' element={<BrowseLetter Letter={'D'}/>}></Route>
            <Route path='E' element={<BrowseLetter Letter={'E'}/>}></Route>
            <Route path='F' element={<BrowseLetter Letter={'F'}/>}></Route>
            <Route path='G' element={<BrowseLetter Letter={'G'}/>}></Route>
            <Route path='H' element={<BrowseLetter Letter={'H'}/>}></Route>
            <Route path='I' element={<BrowseLetter Letter={'I'}/>}></Route>
            <Route path='J' element={<BrowseLetter Letter={'J'}/>}></Route>
            <Route path='K' element={<BrowseLetter Letter={'K'}/>}></Route>
            <Route path='L' element={<BrowseLetter Letter={'L'}/>}></Route>
            <Route path='M' element={<BrowseLetter Letter={'M'}/>}></Route>
            <Route path='N' element={<BrowseLetter Letter={'N'}/>}></Route>
            <Route path='O' element={<BrowseLetter Letter={'O'}/>}></Route>
            <Route path='P' element={<BrowseLetter Letter={'P'} 
                Phrase1={"People"} 
                Phrase2={"Personal Insights"} 
                Phrase3={"Personal Room Invite"} 
                Phrase4={"Pinned Messages"}/>}>
            </Route>
            <Route path='Q' element={<BrowseLetter Letter={'Q'}/>}></Route>
            <Route path='R' element={<BrowseLetter Letter={'R'}/>}></Route>
            <Route path='S' element={<BrowseLetter Letter={'S'}/>}></Route>
            <Route path='T' element={<BrowseLetter Letter={'T'}/>}></Route>
            <Route path='U' element={<BrowseLetter Letter={'U'}/>}></Route>
            <Route path='V' element={<BrowseLetter Letter={'V'}/>}></Route>
            <Route path='W' element={<BrowseLetter Letter={'W'}/>}></Route>
            <Route path='X' element={<BrowseLetter Letter={'X'}/>}></Route>
            <Route path='Y' element={<BrowseLetter Letter={'Y'}/>}></Route>
            <Route path='Z' element={<BrowseLetter Letter={'Z'}/>}></Route>
          </Route>
          <Route path='*' element={<Page404/>}></Route>
          <Route path='404' element={<Page404/>}></Route>
          <Route path='phrase'>
            <Route path="*" element={<Phrase 
                Translation1={"amet ghdgshshshshsgdgfg hdhdgdhdghdgdgfghhee hehheheehheheeehn sdhjdghjsge jdegjajgdcjks jusdhjshakuuycdukhue jdghjschudsyhjde uscghhsdh"}
                Translation2={"suscipit"}
                Translation3={"adipiscing bibendum"}
                Translation4={"ultricies integer quis auctor"}
            />}/>
            <Route path="get" element={<GetPhrases/>}/>
          </Route>
        </Route>
      </Routes>

      
      {/* <LetterLine/> */}
      
    </>
  );
}

export default App;
