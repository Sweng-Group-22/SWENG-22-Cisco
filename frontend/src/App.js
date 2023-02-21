import './App.css';

import Popup from "./components/Popup";
import LikeDislike from "./components/LikeDislike";
import Footer from "./components/Footer"
import WordTranslations from './pages/WordTranslations';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import LetterLine from './components/LetterLine';
import AddButton from './components/AddButton';
function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='word' element={<WordTranslations/>}></Route>
          <Route path='browse' element={<LetterLine/>}>
            {/* <Route path='' element={<AddButton/>}></Route> */}
          </Route>
          
        </Route>
      </Routes>
      {/* <LetterLine/> */}
    </>
  );
}

export default App;
