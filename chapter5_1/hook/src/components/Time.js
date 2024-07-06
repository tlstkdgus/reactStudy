import React from "react";

function Time(props){
    const today= new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const seconds = today.getSeconds();
    return(
    <div style = {{backgroundColor:'black', color:'white'}}>
      <h1 style = {{color:'red'}}>년: {year}</h1>
      <h1>월/일: {month}/{date}</h1>
      <h1>시간: {hour}시 {minute}분 {seconds}초</h1>
    </div>
    )
  }

export default Time;
  