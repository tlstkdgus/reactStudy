import React, { useState } from "react";

function Resume(props){
    const [like,setLike] = useState(0);

    function clickLike(){
        setLike(like+1);
    }
 
    const myColor = props.color;
    const styleColor = {color:myColor};

    return(
        <div style={{border : 'solid 1px ', width:'500px'}}>
            <h1>{props.name} 자기소개서 </h1>
            <h1>{props.hello}</h1>
            <h2>취미: {props.hobby}</h2>
            <h2>좋아하는 음식: {props.food}</h2>
            <h2>좋아하는 색: <span style={{color:'blue'}}>{props.color}</span></h2>
            <button onClick={clickLike}>like <span>{like}</span></button>
        </div>
    )
}

export default Resume;
