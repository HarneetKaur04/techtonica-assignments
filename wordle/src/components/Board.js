// create an array of 10 words and random select one word.
// create a box which is black at inital, set to input
// if input == green, includes, yellow

import React from 'react'

export default function Board(props) {
  return (
    <div className="board" >
      {new Array(5).fill(0).map((_, i)=> 
      <div className='box' style={{backgroundColor: !props.isGuessed? "black" : props.guess[i]=== props.word[i]? "green": props.word.includes(props.guess[i])? "blue" : "black"}} >{props.guess[i]}</div>)}

      </div>
      )
}


