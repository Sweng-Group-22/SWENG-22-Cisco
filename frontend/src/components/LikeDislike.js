import React, {useState} from 'react'
import '../styles/LikeDislike.css'
import { addLike, addDislike } from '../api/Translation'

export default function LikeDislike(props) {

  

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)

  const [likeCount, setLikeCount] = useState(props.likes) // change 54 to initial value of likes when backend is done with this functionality
  const [dislikeCount, setDislikeCount] = useState(props.dislikes) // change 17 to initial value of dislikes when backend is done with this functionality

  function likeFunction(){
    if(likeActive){                // unlike
      setLikeActive(false)
      setLikeCount(likeCount-1)
      addLike(props.idn, true)
      unsetLike();
    }                            
    else{                          // like
      setLikeActive(true)
      setLikeCount(likeCount+1)
      addLike(props.idn, false)
      if(dislikeActive){
        setDislikeActive(false)
        setDislikeCount(dislikeCount-1)
        addDislike(props.idn, true)
        unsetDislike();
      }
      setLike();
    }
  }

  function dislikeFunction(){
    if(dislikeActive){             // undo dislike
      setDislikeActive(false)
      setDislikeCount(dislikeCount-1)
      addDislike(props.idn, true)
      unsetDislike();
    }
    else{                          // dislike
      setDislikeActive(true)
      setDislikeCount(dislikeCount+1)
      addDislike(props.idn, false)
      if(likeActive){
        setLikeActive(false)
        setLikeCount(likeCount-1)
        addDislike(props.idn, true)
        unsetLike();
      }
      setDislike();
    }
  }

  function setLike() {
    var get = document.getElementById('likeImage' + props.idn);
    if (get.src.match("https://i.ibb.co/7zxfpf8/SML-Like-Clr.png")){
      get.src = "https://i.ibb.co/xM6GwxH/SML-Liked-Clr.png";
    }
  }

  function unsetLike() {
    var get = document.getElementById('likeImage' +  props.idn);
    if (get.src.match("https://i.ibb.co/xM6GwxH/SML-Liked-Clr.png")){
      get.src = "https://i.ibb.co/7zxfpf8/SML-Like-Clr.png";
    }
  }

  function setDislike() {
    var get = document.getElementById('dislikeImage' +  props.idn);
    if (get.src.match("https://i.ibb.co/D5s4WqD/SML-Dislike-Clr.png")){
      get.src = "https://i.ibb.co/dt9FPHk/SML-Disliked-Clr.png";
    }
  }

  function unsetDislike() {
    var get = document.getElementById('dislikeImage' +  props.idn);
    if (get.src.match("https://i.ibb.co/dt9FPHk/SML-Disliked-Clr.png")){
      get.src = "https://i.ibb.co/D5s4WqD/SML-Dislike-Clr.png";
    }
  }

  return (
    <>  
      <div className='LikeDislike'>
        <div className='like-box'>
      <button className='like' onClick={likeFunction}>
        <img src="https://i.ibb.co/7zxfpf8/SML-Like-Clr.png" alt='Thumb up' id = {"likeImage" +  props.idn}/>
        {likeCount}
      </button>
        
      <button className='dislike' onClick={dislikeFunction}>
        <img src="https://i.ibb.co/D5s4WqD/SML-Dislike-Clr.png" alt='Thumb down' id = {"dislikeImage" +  props.idn}/>
        {dislikeCount}
      </button>
      </div>
      </div>
    </>
  )
}

