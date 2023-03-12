import React, {useState} from 'react'
import '../styles/LikeDislike.css'


export default function LikeDislike() {

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)

  const [likeCount, setLikeCount] = useState(54) // change 54 to initial value of likes when backend is done with this functionality
  const [dislikeCount, setDislikeCount] = useState(17) // change 17 to initial value of dislikes when backend is done with this functionality

  function likeFunction(){
    if(likeActive){                // unlike
      setLikeActive(false)
      setLikeCount(likeCount-1)
    }                            
    else{                          // like
      setLikeActive(true)
      setLikeCount(likeCount+1)
      if(dislikeActive){
        setDislikeActive(false)
        setDislikeCount(dislikeCount-1)
      }
    }
  }

  function dislikeFunction(){
    if(dislikeActive){             // undo dislike
      setDislikeActive(false)
      setDislikeCount(dislikeCount-1)
    }
    else{                          // dislike
      setDislikeActive(true)
      setDislikeCount(dislikeCount+1)
      if(likeActive){
        setLikeActive(false)
        setLikeCount(likeCount-1)
      }
    }
  }

  return (
    <>  
      <div className='LikeDislike'>
        <div className='like-box'>
      <button className='like' onClick={likeFunction}>
        <img src="https://i.ibb.co/vZ2QnWJ/25297.png"/>
        {likeCount}
      </button>
        
      <button className='dislike' onClick={dislikeFunction}>
        <img src="https://i.ibb.co/XS6yjNT/output-onlinepngtools-1.png"/>
        {dislikeCount}
      </button>
      </div>
      </div>
    </>
  )
}

