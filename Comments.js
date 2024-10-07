import React, { useState } from 'react';
import "./Comments.css";
function Comments() {
  const [comment,setComment]=useState("");

  const onChangeHandler=(e)=>{
    setComment(e.target.value);

  }
  return (
    <div className='box'>
    <div className='main-container'>
     
      <div className='comment-flexbox'>
        <h2 className='comment-text'>Leave your feedback </h2>
        <div>{comment}</div>
        <textarea onchange={onChangeHandler} className='input-boxs'></textarea>
        <button className='comment-button'>submit</button>
      </div>
      </div>
    </div>
  )
}

export default Comments