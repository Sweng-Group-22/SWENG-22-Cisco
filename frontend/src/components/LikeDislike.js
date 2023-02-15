import React, {useState} from 'react'
import '../styles/LikeDislike.css'


export default function LikeDislike() {

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)

  function likeFunction(){
    if(likeActive){
      setLikeActive(false)
      alert('unliked')
    }
    else{
      setLikeActive(true)
      alert('liked')
      if(dislikeActive){
        setDislikeActive(false)
      }
    }
  }

  function dislikeFunction(){
    if(dislikeActive){
      setDislikeActive(false)
      alert('not disliked')
    }
    else{
      setDislikeActive(true)
      alert('disliked')
      if(likeActive){
        setLikeActive(false)
      }
    }
  }

  return (
    <>  
      <div className='LikeDislike'>
      <button className='like' onClick={likeFunction}>
        <img src="https://i.ibb.co/vZ2QnWJ/25297.png"/>
      </button>
        
      <button className='dislike' onClick={dislikeFunction}>
        <img src="https://i.ibb.co/XS6yjNT/output-onlinepngtools-1.png"/>
      </button>
      </div>
    </>
  )
}

